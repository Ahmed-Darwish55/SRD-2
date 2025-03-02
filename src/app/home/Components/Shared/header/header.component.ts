import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationService } from 'src/app/home/Services/configuration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public configService: ConfigurationService
  ) {}

  ngAfterViewInit(): void {
    this.configService.lang.subscribe((x) => (this.switchLang = x));
  }

  switchLang: string = '';
  arLang: boolean = false;
  headerDiv = document.getElementsByTagName('header');
  previousScrollPos = window.pageYOffset;
  scrolledFromSection = false;
  currentLanguage: string = 'ar';
  activeLinkId: string | null = null;
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  changeLanguage(language: string) {
    this.configService.lang.next(language);
    if (language == 'en') {
      this.arLang = false;
    }
    this.configService.getCurrentLanguage() == language
      ? null
      : this.updateUI(language, true);
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

  routeFor(activeRoute: ActivatedRoute, lang: any): any {
    const snapshot = activeRoute.snapshot.pathFromRoot;
    let result = snapshot[1].url.map((s: any) => s.path);
    result[0] = lang;
    return result;
  }

  ngOnInit(): void {
    this.configService.lang.subscribe((x) => (this.switchLang = x));
    const htmlElement = document.querySelector('html');
    if (htmlElement) {
      const lang = htmlElement.getAttribute('lang');
      if (lang) {
        this.currentLanguage = lang;
      }
    }

    this.changeScroll();

    // تحديد اللينك الأول كـ Active
    if (this.config.headerConfiguration?.navigationItems.length > 0) {
      this.activeLinkId = this.config.headerConfiguration.navigationItems[0].id;
    }
  }

  @Input() config: any;

  alerts() {
    let menu = document.querySelector('.nav-menu.w-nav-menu');
    menu?.classList.toggle('menu-show');
  }

  // // تحديد الـ Section الظاهر
  // getActiveSectionId(): string | null {
  //   const sections = this.config.headerConfiguration?.navigationItems;
  //   if (!sections) {
  //     return null;
  //   }

  //   const middleOfScreen = window.scrollY + window.innerHeight / 2;

  //   for (let i = sections.length - 1; i >= 0; i--) {
  //     const section = document.getElementById(sections[i].id);
  //     if (section) {
  //       const sectionTop = section.offsetTop;
  //       const sectionBottom = sectionTop + section.offsetHeight;

  //       // التحقق من المنتجات والخدمات
  //       if (sections[i].id === 'products-and-services') {
  //         const productsSection = document.getElementById('productsCatalogue');
  //         const servicesSection = document.getElementById('servicesCatalogue');
  //         if (productsSection && servicesSection) {
  //           const productsTop = productsSection.offsetTop;
  //           const productsBottom = productsTop + productsSection.offsetHeight;
  //           const servicesTop = servicesSection.offsetTop;
  //           const servicesBottom = servicesTop + servicesSection.offsetHeight;
  //           if (middleOfScreen >= productsTop && middleOfScreen <= productsBottom) {
  //             return 'productsCatalogue';
  //           } else if (middleOfScreen >= servicesTop && middleOfScreen <= servicesBottom) {
  //             return 'servicesCatalogue';
  //           }
  //         }
  //       } else if (middleOfScreen >= sectionTop && middleOfScreen <= sectionBottom) {
  //         console.log(sections[i]);
  //         return sections[i].id;
  //       }
  //     }
  //   }

  //   return null;
  // }

  changeScroll() {
    let scrollTrigger = 60;
    let me = this;
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      me.previousScrollPos = currentScrollPos;

      if (me.headerDiv.length > 0) {
        if (
          window.scrollY >= scrollTrigger ||
          window.pageYOffset >= scrollTrigger
        ) {
        } else {
        }
      }

      // تحديث activeLinkId
      // me.activeLinkId = me.getActiveSectionId();
    };

    setTimeout(() => {
      this.checkLang();
    }, 100);
  }

  scrollToSection(id: string) {
    this.scrolledFromSection = true;
    this.activeLinkId = id;
    window.onscroll = null;
    this.router.navigate([this.configService.getCurrentLanguage()], {
      fragment: id,
    });

    let navDiv = document.getElementsByTagName('nav');
    navDiv[0].classList.remove('menu-show');
    setTimeout(() => {
      this.changeScroll();
    }, 2000);
  }

  ngAfterViewChecked(): void {
    // أي كود إضافي محتاجه هنا
  }
}
