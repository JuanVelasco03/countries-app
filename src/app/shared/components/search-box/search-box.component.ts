import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounce, debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy{
  private debouncer: Subject<string> = new Subject<string>();

  private debouncerSubscription?: Subscription;

  @Input() placeHolder: string = '';
  @Input() initialValue: string = '';


  @Output() onValue = new EventEmitter<string>();

  @Output() onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe( value => {
        this.onDebounce.emit( value )
      })
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe()
  }

  emitValue(value: string) {
    if(value !== "" && value !== null){
      this.onValue.emit(value);
    }
  }

  onKeyPress( searchTerm: string ){
    this.debouncer.next(searchTerm);
  }

}
