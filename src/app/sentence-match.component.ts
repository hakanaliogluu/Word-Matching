import { Component } from '@angular/core';
import { SentenceGeneratorService } from './sentence-generator.service';

interface MatchedWord {
  word: string;
  isMatched: boolean;
}

@Component({
  selector: 'app-sentence-match',
  templateUrl: './sentence-match.component.html',
  styleUrls: ['./sentence-match.component.css']
})
export class SentenceMatchComponent {
  randomSentence: string = '';
  inputWords: string = '';
  matchedWords: MatchedWord[] = [];

  constructor(private sentenceGeneratorService: SentenceGeneratorService) {
    this.generateRandomSentence();
  }

  generateRandomSentence(): void {
    this.randomSentence = this.sentenceGeneratorService.getRandomSentence();
    this.matchedWords = []; this.matchedWords = this.randomSentence.split(' ').map(word => ({ word: word, isMatched: false }));
  }

  onInputWordsChange() {
    const inputWordsArray = this.inputWords.trim().split(' ');
    this.matchedWords.forEach(word => {
      word.isMatched = inputWordsArray.includes(word.word);
    });
  }

  onSpaceKeyPressed() {
    this.onInputWordsChange();
  }
}
