import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/members';
import { MembersService } from 'src/app/_services/members.service';
import { ActivatedRoute } from '@angular/router';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: Member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private memberService: MembersService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.loadMember();
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ]
  } 
  loadMember() { 
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => {
    this.member = member;
    this.galleryImages = this.getImages();

    })
  }
  getImages(): NgxGalleryImage[] {
    const imageUrls = [];
    for (const photo of this.member.photos) {
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url
      })
    }
    return imageUrls;
  }


}
