import {
  AudioModule,
  RecordingPresets,
  useAudioPlayer,
  useAudioPlayerStatus,
  useAudioRecorder,
} from "expo-audio";

export const useRecording = (audioUri: string | null) => {
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);

  const player = useAudioPlayer(audioUri ?? undefined);
  const status = useAudioPlayerStatus(player);

  const isPlaying = status.playing;

  async function startRecording() {
    const status = await AudioModule.requestRecordingPermissionsAsync();

    if (!status.granted) {
      alert("Permesso microfono negato");
      return;
    }

    await recorder.prepareToRecordAsync();
    recorder.record();
  }

  async function stopRecording(): Promise<string | null> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    await recorder.stop();

    const uri = recorder.uri;

    if (!uri) {
      alert("Nessun audio registrato");
      return null;
    }

    return uri;
  }

  async function playAudio() {
    if (!audioUri) {
      alert("Nessun audio da riprodurre");
      return;
    }

    if (isPlaying) {
      player.pause();
      return;
    }

    if (status.didJustFinish || status.currentTime >= status.duration - 0.05) {
      await player.seekTo(0);
    }

    player.play();
  }

  async function uploadAudio(uri: string) {
    const formData = new FormData();

    formData.append("file", {
      uri,
      name: "voice-message.m4a",
      type: "audio/m4a",
    } as any);

    await fetch("https://api.tuosito.com/messages/audio", {
      method: "POST",
      body: formData,
    });
  }

  return { startRecording, stopRecording, playAudio, isPlaying };
};
