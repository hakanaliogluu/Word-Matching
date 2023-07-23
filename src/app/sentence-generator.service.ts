import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SentenceGeneratorService {
  private sentences: string[] = [
    'The quick brown fox jumps over the lazy dog.',
    'She sells seashells by the seashore.',
    'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',
    'Peter Piper picked a peck of pickled peppers.'
  ];

  constructor() {}

  getRandomSentence(): string {
    const randomIndex = Math.floor(Math.random() * this.sentences.length);
    return this.sentences[randomIndex];
  }
}
