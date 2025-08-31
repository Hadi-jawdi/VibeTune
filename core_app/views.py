from django.shortcuts import render

# Create your views here.
def mood_music(request):
    return render(request, 'core_app/mood_music.html')
    