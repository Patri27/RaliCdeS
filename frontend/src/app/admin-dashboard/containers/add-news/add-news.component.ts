import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/news/news.models';
import { Auth } from 'src/app/auth/auth.models';
import { Store } from '@ngxs/store';
import { AddNews } from 'src/app/news/store/news.actions';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'rcs-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  newsForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
    content: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(2000)]],
    category: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]]
  }
  );

  @Input() user: Auth;

  constructor(private store: Store, private fb: FormBuilder) { }

  ngOnInit() {
  }

  addNews() {
    if (this.newsForm.valid) {
      this.store.dispatch(new AddNews(this.newsForm.value));
    }
  }
}
