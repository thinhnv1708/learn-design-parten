import PhoneNotifier from './PhoneNotifier'
import VideoData from './VideoData'
import YoutubeNotifier from './YoutubeNotifier'

const videoData = new VideoData()

const youtubeObserver = new YoutubeNotifier(videoData)
new PhoneNotifier(videoData)

videoData.setTitle('okok')
videoData.setDescription('descrip')

videoData.removeObserver(youtubeObserver)
videoData.setTitle('lol')

new YoutubeNotifier(videoData)

videoData.setTitle('x vido')