import React, { useState, useEffect } from 'react';
import { getBookmarks, createBookmark, deleteBookmark } from '../services/api';
import { Bookmark } from '../types';

const BookmarkList: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [newBookmark, setNewBookmark] = useState({
    url: '',
    title: '',
    description: '',
    tags: ''
  });

  useEffect(() => {
    loadBookmarks();
  }, []);

  const loadBookmarks = async () => {
    try {
      const data = await getBookmarks();
      setBookmarks(data);
    } catch (error) {
      console.error('Failed to load bookmarks:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createBookmark({
        ...newBookmark,
        tags: newBookmark.tags.split(',').map(tag => tag.trim()).filter(Boolean)
      });
      setNewBookmark({ url: '', title: '', description: '', tags: '' });
      loadBookmarks();
    } catch (error) {
      console.error('Failed to create bookmark:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteBookmark(id);
      loadBookmarks();
    } catch (error) {
      console.error('Failed to delete bookmark:', error);
    }
  };

  return (
    <div className="bookmark-list">
      <h2>Your Bookmarks</h2>
      
      <form className="bookmark-form" onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="URL"
          value={newBookmark.url}
          onChange={(e) => setNewBookmark({ ...newBookmark, url: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Title"
          value={newBookmark.title}
          onChange={(e) => setNewBookmark({ ...newBookmark, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={newBookmark.description}
          onChange={(e) => setNewBookmark({ ...newBookmark, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          value={newBookmark.tags}
          onChange={(e) => setNewBookmark({ ...newBookmark, tags: e.target.value })}
        />
        <button type="submit">Add Bookmark</button>
      </form>

      <div className="bookmarks">
        {bookmarks.length === 0 ? (
          <p>No bookmarks yet. Add one above!</p>
        ) : (
          bookmarks.map((bookmark) => (
            <div key={bookmark.id} className="bookmark-item">
              <h3>
                <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                  {bookmark.title}
                </a>
              </h3>
              <p>{bookmark.description}</p>
              <div className="tags">
                {bookmark.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <button onClick={() => handleDelete(bookmark.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookmarkList;