FROM golang:1.21-alpine

WORKDIR /app

# Copy go mod file
COPY go.mod ./

# Copy source code
COPY . .

# Download dependencies and generate go.sum
RUN go mod tidy

# Build the application
RUN go build -o main .

CMD ["./main"]