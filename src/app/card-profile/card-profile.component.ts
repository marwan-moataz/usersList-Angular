import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card-profile',
  standalone: true,
  imports: [CardModule],
  templateUrl: './card-profile.component.html',
  styleUrl: './card-profile.component.css',
})
export class CardProfileComponent {
  searchtext: any;
  usersArr: Array<any> = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      admin: true,
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      admin: true,
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      admin: false,
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      phone: '493-170-9623 x156',
      website: 'kale.biz',
      admin: true,
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      phone: '(254)954-1289',
      website: 'demarco.info',
      admin: false,
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      phone: '1-477-935-8478 x6430',
      website: 'ola.org',
      admin: false,
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      phone: '210.067.6132',
      website: 'elvis.io',
      admin: true,
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      phone: '586.493.6943 x140',
      website: 'jacynthe.com',
      admin: true,
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      phone: '(775)976-6794 x41206',
      website: 'conrad.com',
      admin: true,
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      phone: '024-648-3804',
      website: 'ambrose.net',
      admin: true,
    },
  ];
  temp = [...this.usersArr];

  filterUsers(event: any): void {
    event.preventDefault();
    this.usersArr = this.temp.filter((user) =>
      user.username.toLowerCase().includes(event.target?.value.toLowerCase())
    );
  }
}
