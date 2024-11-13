import { useEffect } from 'react';

const VoiceGreeting = () => {
  useEffect(() => {
    const speak = () => {
      // Verifica se a API de síntese de voz está disponível
      if ('speechSynthesis' in window) {
        // nova instância de fala
        const utterance = new SpeechSynthesisUtterance();
        
        // texto que será falado
        utterance.text = "Seja bem-vindo ao SENAI Valinhos! Transformando talento em sucesso há mais de 60 anos.";
        
        // voz masculina em português
        utterance.lang = 'pt-BR';
        const voices = window.speechSynthesis.getVoices();
        utterance.voice = voices.find(voice => 
          voice.lang.includes('pt') && voice.name.toLowerCase().includes('male')
        ) || voices[0]; // Usa a primeira voz disponível como fallback
        
        // tom e velocidade
        utterance.pitch = 1;
        utterance.rate = 1;
        
        // Reproduz o texto
        window.speechSynthesis.speak(utterance);
      }
    };

    setTimeout(speak, 1000);

    // Cleanup function
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []); 

  return null; // Este componente não renderiza nada visualmente
};

export default VoiceGreeting;