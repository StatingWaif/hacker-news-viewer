from rest_framework import serializers
from .models import Story, Comment

class StorySerializer(serializers.ModelSerializer):
  comment_count = serializers.IntegerField(read_only=True)
  class Meta:
    model = Story
    fields = ['id', 'title','rating', 'author', 'comment_count', 'date', 'url']

class CommentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = ['id', 'story_id', 'parent_comment_id', 'author', 'date', 'text']

