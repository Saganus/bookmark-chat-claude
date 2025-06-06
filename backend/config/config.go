package config

import (
	"os"
)

type Config struct {
	ClaudeAPIKey string
	DatabaseURL  string
	JWTSecret    string
}

func Load() *Config {
	return &Config{
		ClaudeAPIKey: os.Getenv("CLAUDE_API_KEY"),
		DatabaseURL:  getEnvOrDefault("DATABASE_URL", "bookmarks.db"),
		JWTSecret:    getEnvOrDefault("JWT_SECRET", "your-secret-key"),
	}
}

func getEnvOrDefault(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}