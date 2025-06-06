package api

import (
	"net/http"

	"github.com/acapulco/bookmark-chat-claude/backend/config"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine, cfg *config.Config) {
	api := r.Group("/api/v1")
	{
		api.GET("/health", healthCheck)
		
		bookmarks := api.Group("/bookmarks")
		{
			bookmarks.GET("", getBookmarks)
			bookmarks.POST("", createBookmark)
			bookmarks.GET("/:id", getBookmark)
			bookmarks.PUT("/:id", updateBookmark)
			bookmarks.DELETE("/:id", deleteBookmark)
		}

		chats := api.Group("/chats")
		{
			chats.GET("", getChats)
			chats.POST("", createChat)
			chats.GET("/:id", getChat)
			chats.POST("/:id/messages", sendMessage)
		}
	}
}

func healthCheck(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"status": "healthy",
		"service": "bookmark-chat-claude",
	})
}

func getBookmarks(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"bookmarks": []interface{}{},
	})
}

func createBookmark(c *gin.Context) {
	c.JSON(http.StatusCreated, gin.H{
		"message": "Bookmark created",
	})
}

func getBookmark(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{
		"id": id,
	})
}

func updateBookmark(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{
		"id": id,
		"message": "Bookmark updated",
	})
}

func deleteBookmark(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{
		"id": id,
		"message": "Bookmark deleted",
	})
}

func getChats(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"chats": []interface{}{},
	})
}

func createChat(c *gin.Context) {
	c.JSON(http.StatusCreated, gin.H{
		"message": "Chat created",
	})
}

func getChat(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, gin.H{
		"id": id,
	})
}

func sendMessage(c *gin.Context) {
	chatID := c.Param("id")
	c.JSON(http.StatusOK, gin.H{
		"chat_id": chatID,
		"message": "Message sent",
	})
}