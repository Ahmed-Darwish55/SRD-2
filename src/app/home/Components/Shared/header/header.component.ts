import {
  AfterViewInit,
 Component,Input,OnChanges,OnInit,SimpleChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit ,AfterViewInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public configService: ConfigurationService
  ) {}
  ngAfterViewInit(): void {
    this.configService.lang.subscribe(x => this.switchLang = x);
  }
  switchLang:string=""
  arLang:boolean=false
  headerDiv = document.getElementsByTagName('header');
  // headerDiv = document.getElementsByTagName('.header');
  scrolledUpclassName = 'scrolledUpClass';
  scrolledDownclassName = 'scrolledDownClass';
  className = 'inverted-nav';
  previousScrollPos = window.pageYOffset;
  scrolledFromSection = false;
  currentLanguage: string = 'ar';

  changeLanguage(language: string) {
    this.configService.lang.next(language);
    if(language=="en"){
      this.arLang=false
    }
    this.configService.getCurrentLanguage() == language
      ? null
      : this.updateUI(language, true);

      // this.configService.lang.subscribe(  console.log)
      // console.log(this.switchLang);
      
  }

  checkLang() {
    const currentLang = this.configService.getCurrentLanguage();
    this.updateUI(currentLang, false);
  }

  updateUI(language: string, navigate: boolean) {
    this.configService.lang.next(language);
    if (language == 'en') {
      document.getElementById('enSpan')?.classList.add('active');
      document.getElementById('arSpan')?.classList.remove('active');
    } else {
      document.getElementById('arSpan')?.classList.add('active');
      document.getElementById('enSpan')?.classList.remove('active');
    }
    if (navigate) {
      this.route.fragment.subscribe((fragment: any) => {
        const newPath = this.routeFor(this.route, language);
        this.router.navigate(newPath, {
          fragment: fragment,
        });
      });
    }
  }

  routeFor(activeRoute: ActivatedRoute, lang: any): any[] {
    const snapshot = activeRoute.snapshot.pathFromRoot;
    let result = snapshot[1].url.map((s: any) => s.path);
    result[0] = lang;
    return result;
  }


  ngOnInit(): void {
    this.configService.lang.subscribe(x => this.switchLang = x);
      const htmlElement = document.querySelector('html');
      if (htmlElement) {
        const lang = htmlElement.getAttribute('lang');
        if (lang) {
          this.currentLanguage = lang;
        }
        // console.log(this.currentLanguage );
        
    }


    this.changeScroll();
  }
  @Input() config: any;
  alerts() {
    let menu = document.querySelector('.nav-menu.w-nav-menu');
    menu?.classList.toggle('menu-show');
  }

  changeScroll() {
    

    let scrollTrigger = 60;

    let me = this;
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      me.headerDiv[0].classList.remove('head');
      if (currentScrollPos < me.previousScrollPos) {
        me.headerDiv[0].classList.remove(me.scrolledDownclassName);
        me.headerDiv[0].classList.add(me.scrolledUpclassName);
      } else {
        me.headerDiv[0].classList.remove(me.scrolledUpclassName);
        me.headerDiv[0].classList.add(me.scrolledDownclassName);
      }
      me.previousScrollPos = currentScrollPos;

      if (me.headerDiv.length > 0) {
        if (
          window.scrollY >= scrollTrigger ||
          window.pageYOffset >= scrollTrigger
        ) {
          me.headerDiv[0].classList.add(me.className);
        } else {
          me.headerDiv[0].classList.remove(me.className);
        }
      }
    };

    setTimeout(() => {
      this.checkLang();
    }, 100);
  }
  scrollToSection(id: string) {
    // this.scrolledFromSection = true;
    this.headerDiv[0].classList.remove(this.scrolledUpclassName);
    this.headerDiv[0].classList.add(this.scrolledDownclassName);
    this.headerDiv[0].classList.add('head');
    window.onscroll = null;
    this.router.navigate([this.configService.getCurrentLanguage()], {
      fragment: id,
    })
     
      let navDiv = document.getElementsByTagName('nav');
      navDiv[0].classList.remove('menu-show');
      setTimeout(() => {
        this.changeScroll();
      }, 2000);

   

   
  
  }
}
