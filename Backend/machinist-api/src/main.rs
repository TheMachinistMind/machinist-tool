use axum::{routing::get, routing::post, Router, Json, extract::State};
use tower_http::cors::{CorsLayer, Any};
use sqlx::postgres::PgPoolOptions;
use sqlx::PgPool;
use serde::{Deserialize, Serialize};
use bcrypt::{hash, DEFAULT_COST};

#[tokio::main]
async fn main() {
    dotenvy::dotenv().ok();
    let database_url = std::env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set");

    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&database_url)
        .await
        .expect("Failed to connect to database");

    println!("Database connected!");

    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods(Any)
        .allow_headers(Any);

    let app = Router::new()
        .route("/", get(hello))
        .route("/register", post(register))
        .with_state(pool)
        .layer(cors);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000")
        .await
        .unwrap();

    println!("Server running on http://localhost:3000");
    axum::serve(listener, app).await.unwrap();
}

async fn hello() -> &'static str {
    "Hello from Machinist API!"
}

#[derive(Deserialize)]
struct RegisterRequest {
    name: String,
    email: String,
    password: String,
}

#[derive(Serialize)]
struct RegisterResponse {
    message: String,
}

async fn register(
    State(pool): State<PgPool>,
    Json(body): Json<RegisterRequest>,
) -> Json<RegisterResponse> {
    let password_hash = hash(&body.password, DEFAULT_COST).unwrap();

    sqlx::query!(
        "INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3)",
        body.name,
        body.email,
        password_hash
    )
    .execute(&pool)
    .await
    .unwrap();

    Json(RegisterResponse {
        message: "User registered successfully!".to_string(),
    })
}