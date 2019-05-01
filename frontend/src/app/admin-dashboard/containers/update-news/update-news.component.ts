import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Auth } from 'src/app/auth/auth.models';
import { News } from 'src/app/news/news.models';
import { UpdateNews } from 'src/app/news/store/news.actions';

@Component({
  selector: 'rcs-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.scss']
})
export class UpdateNewsComponent implements OnInit {
  newsForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
    content: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(500)]],
    category: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]]
  }
  );

  @Input() user: Auth;
  @Input() news: News;

  constructor(private store: Store, private fb: FormBuilder) { }

  ngOnInit() {
  }

  updateNews() {
    if (this.newsForm.valid) {
      this.store.dispatch(new UpdateNews(this.news._id, this.newsForm.value));
    }
  }

}
