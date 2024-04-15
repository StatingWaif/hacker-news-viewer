from django.http import JsonResponse
from .models import Story, Comment
from .serializers import StorySerializer, CommentSerializer
from django.db.models import Count
from django.db import models
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
import json


def story_list(request):
    stories = Story.objects.annotate(comment_count=Count('comment', output_field=models.IntegerField())).order_by('-date').all()[:100]
    serializer = StorySerializer(stories, many=True)
    return JsonResponse(serializer.data, safe=False)

def story_detail(request, story_id):
    try: 
      # story = Story.objects.get(id=story_id)
      story = Story.objects.annotate(comment_count=Count('comment')).get(id=story_id)
    except Story.DoesNotExist:
      return JsonResponse({'error': 'Story not found'}, status=404)
    
    serializer = StorySerializer(story)
    return JsonResponse(serializer.data)

def comment_list(request):
  comments = Comment.objects.all()
  serializer = CommentSerializer(comments, many=True)
  return JsonResponse(serializer.data, safe=False)


def comments_for_story(request, story_id):
    comments = Comment.objects.filter(story_id=story_id, parent_comment_id = None)
    serializer = CommentSerializer(comments, many=True)
    return JsonResponse(serializer.data, safe=False)

def replies_for_comment(request, comment_id):
   replies = Comment.objects.filter(parent_comment_id = comment_id)
   serializer = CommentSerializer(replies, many=True)
   return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def add_comment(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            serializer = CommentSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON data"}, status=status.HTTP_400_BAD_REQUEST)
    return JsonResponse({"error": "Only POST requests are allowed"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
      