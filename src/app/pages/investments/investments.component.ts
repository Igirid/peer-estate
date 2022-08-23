import { Component, OnInit } from '@angular/core';
import { Duration, InvestmentsForm, Partner, Peer, SelectOption } from 'src/app/custom';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form: InvestmentsForm = {
    search: '',
    duration: 0,
    partner: '',
    peers: '',
  }
  durations: Duration[] = [
    {
      days: 90
    },
    {
      days: 180
    },
    {
      days: 270
    },
    {
      days: 360
    },
  ]
  partners: Partner[] = [
    {
      name: 'Property Builders'
    },
    {
      name: 'Estate Gurus'
    },
    {
      name: 'Prime Estate'
    },

  ]
  peers: Peer[] = [
    {
      range: '2-5'
    },
    {
      range: '6-10'
    },
    {
      range: '11-15'
    },

  ]

}
