# User API

A REST API for user management built with Node.js, Express, and MongoDB.

## 🐳 Running with Docker

### Prerequisites
- Docker installed
- MongoDB Atlas cluster (or local MongoDB)

### Quick Start

```bash
# Pull the latest image
docker pull chathuraishara/user-api:master

# Run the container
docker run -d \
  --name user-api \
  -p 5000:5000 \
  -e PORT=5000 \
  -e MONGO_URI="your-mongodb-connection-string" \
  chathuraishara/user-api:master
```

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |

### API Endpoints

- `GET /api/usersDemo/users` - Get all users
- `POST /api/usersDemo/users` - Create a user
- `PUT /api/usersDemo/users/:id` - Update a user
- `DELETE /api/usersDemo/users/:id` - Delete a user

### Example API Usage

```bash
# Get all users
curl http://localhost:5000/api/usersDemo/users

# Create a user
curl -X POST http://localhost:5000/api/usersDemo/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "role": "user"}'
```

## 🔧 Development

### Local Development
```bash
git clone https://github.com/ChathuraIshara/User-api-flow.git
cd User-api-flow
npm install
cp .env.example .env
# Edit .env with your values
npm start
```

### Using Docker Compose
```bash
docker-compose -f docker-compose.prod.yml up -d
```
