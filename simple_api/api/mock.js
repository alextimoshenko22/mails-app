const sentMails = [
  {
    id: '111b0c31-6360-43ff-80d1-581a11615333',
    from: 'alextimoshenko@mail.ru',
    to: 'luxe@gmail.com',
    theme: 'Things',
    body: 'Give my t-shirt please',
    date: '01.04.2022',
    drafts: false,
    sender: {
      id: '22222-b3563-4dddd-5555-7f3453',
      name: 'Alex Timoshenko',
      avatar: '',
    }
  },
  {
    id: '54b642d7-5e86-4717-a466-0640a1dee222',
    from: 'alextimoshenko@mail.ru',
    to: 'bernard2201@mail.ru',
    theme: 'School',
    body: 'Please help me with my school',
    date: '22.03.2022',
    drafts: false,
    sender: {
      id: '22222-b3563-4dddd-5555-7f3453',
      name: 'Alex Timoshenko',
      avatar: '',
    }
  },
  {
    id: '512222d7-5e86-4717-a466-0640a1d34433',
    from: 'alextimoshenko@mail.ru',
    to: 'mark_111@yandex.ru',
    theme: 'About business',
    body: 'Start new email...',
    date: '01.02.2022',
    drafts: true,
    sender: {
      id: '22222-b3563-4dddd-5555-7f3453',
      name: 'Alex Timoshenko',
      avatar: '',
    }
  },
];

const incomingMails = [
  {
    id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
    from: 'alextimoshenko@mail.ru',
    to: 'antony@gmail.com',
    theme: 'About me',
    cathegory: 'social',
    body: 'Not bad',
    date: '03.05.2021',
    checked: true,
    basket: false,
    sender: {
      id: 'a304959a-76c0-4b34-954a-b38dbf310360',
      name: 'Antony',
      avatar: '',
      spam: false,
    }
  },
  {
    id: '429dea85-11dd-4054-a31e-c60c92e17255',
    from: 'alextimoshenko@mail.ru',
    to: 'sam-fun@yandex.ru',
    theme: 'Food',
    cathegory: 'social',
    body: 'No burgers',
    date: '02.01.2022',
    checked: true,
    basket: false,
    sender: {
      id: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
      name: 'Sam',
      avatar: '',
      spam: false,
    }
  },
  {
    id: '53b642d7-5e86-4717-a466-0640a1dee076',
    from: 'alextimoshenko@mail.ru',
    to: 'diana123@yandex.ru',
    theme: 'Review',
    cathegory: 'mailingLists',
    body: 'Perfect Margarita',
    date: '22.02.2022',
    checked: true,
    basket: false,
    sender: {
      id: '20bed9b5-9c7b-4771-8221-75b74ed1904a',
      name: 'Diana',
      avatar: '',
      spam: false,
    }
  },
  {
    id: 'c27ab88e-375c-4e98-aa94-8a180150a797',
    from: 'alextimoshenko@mail.ru',
    to: 'mike-bro@mail.ru',
    theme: 'About restautant',
    cathegory: 'social',
    body: 'No burgers again. But Chef Pizza is the best one',
    date: '11.04.2022',
    checked: true,
    basket: false,
    sender: {
      id: '0101982e9-b432-4b7d-aec6-7f6ff2e6jjjj',
      name: 'Mike',
      avatar: '',
      spam: false,
    }
  },
  {
    id: 'abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a',
    from: 'alextimoshenko@mail.ru',
    to: 'lollydolly@gmail.com',
    theme: 'Californication',
    cathegory: 'news',
    body: 'Good for lunch',
    date: '14.12.2021',
    checked: true,
    basket: false,
    sender: {
      id: 'c3d4abd4-c3ef-46e1-8719-eb17db1d6e99',
      name: 'Lolly',
      avatar: '',
      spam: false,
    }
  },
  {
    id: '13b642d7-5e86-4717-a466-0640a1dee076',
    from: 'alextimoshenko@mail.ru',
    to: 'agataaa@mail.com',
    theme: 'Relax Time',
    cathegory: 'news',
    body: 'Best bakery',
    date: '01.01.2020',
    checked: true,
    basket: false,
    sender: {
      id: '52a63cc0-5a6f-41f3-9774-0161ea4c9b0c',
      name: 'Agata',
      avatar: '',
      spam: false,
    }
  },
  {
    id: '5db6247b-ab1c-49db-be1f-8dd27fd38b81',
    from: 'alextimoshenko@mail.ru',
    to: 'payne@gmail.com',
    theme: 'Travel',
    cathegory: 'news',
    body: 'Ready to go in Tokyo',
    date: '30.07.2021',
    checked: true,
    basket: false,
    sender: {
      id: 'aaaa82e9-b422-4b2d-a111-7f6ff2e644bb',
      name: 'Alex',
      avatar: '',
      spam: false,
    }
  },
  {
    id: '381b0c31-6360-43ff-80d1-581a116159d8',
    from: 'alextimoshenko@mail.ru',
    to: 'ligth@gmail.com',
    theme: 'Californication',
    cathegory: 'news',
    body: 'New product for your',
    date: '21.09.2021',
    checked: true,
    basket: false,
    sender: {
      id: '1547335a-ea18-4547-a73d-32bd6e9f651c',
      name: 'Rebeca',
      email: 'ligth@gmail.com',
      avatar: '',
      spam: false,
    }
  },
];

const mails = [
  {
    id: '111b0c31-6360-43ff-80d1-581a11615333',
    type: 'sent',
    from: 'alextimoshenko@mail.ru',
    to: 'luxe@gmail.com',
    theme: 'Things',
    body: 'Give my t-shirt please',
    date: '01.04.2022',
    sender: {
      id: '22222-b3563-4dddd-5555-7f3453',
      name: 'Alex Timoshenko',
      avatar: '',
    }
  },

  {
    id: '54b642d7-5e86-4717-a466-0640a1dee222',
    type: 'sent',
    from: 'alextimoshenko@mail.ru',
    to: 'bernard2201@mail.ru',
    theme: 'School',
    body: 'Please help me with my school',
    date: '22.03.2022',
    sender: {
      id: '22222-b3563-4dddd-5555-7f3453',
      name: 'Alex Timoshenko',
      avatar: '',
    }
  },

  {
    id: '512222d7-5e86-4717-a466-0640a1d34433',
    type: 'basket',
    from: 'alextimoshenko@mail.ru',
    to: 'mark_111@yandex.ru',
    theme: 'About business',
    body: 'Start new email...',
    date: '01.02.2022',
    sender: {
      id: '22222-b3563-4dddd-5555-7f3453',
      name: 'Alex Timoshenko',
      avatar: '',
    }
  },
  //incoming
  {
    id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
    type: 'incoming',
    from: 'antony@gmail.com',
    to: 'alextimoshenko@mail.ru',
    theme: 'About me',
    cathegory: 'social',
    body: 'Not bad',
    date: '03.05.2021',
    checked: true,
    sender: {
      id: 'a304959a-76c0-4b34-954a-b38dbf310360',
      name: 'Antony',
      avatar: '',
    }
  },
  {
    id: '429dea85-11dd-4054-a31e-c60c92e17255',
    type: 'incoming',
    from: 'sam-fun@yandex.ru',
    to: 'alextimoshenko@mail.ru',
    theme: 'Food',
    cathegory: 'social',
    body: 'No burgers',
    date: '02.01.2022',
    checked: false,
    sender: {
      id: 'dfb982e9-b432-4b7d-aec6-7f6ff2e6af54',
      name: 'Sam',
      avatar: '',
    }
  },
  {
    id: '53b642d7-5e86-4717-a466-0640a1dee076',
    type: 'incoming',
    from: 'diana123@yandex.ru',
    to: 'alextimoshenko@mail.ru',
    theme: 'Review',
    cathegory: 'mailingLists',
    body: 'Perfect Margarita',
    date: '22.02.2022',
    checked: true,
    sender: {
      id: '20bed9b5-9c7b-4771-8221-75b74ed1904a',
      name: 'Diana',
      avatar: '',
    }
  },
  {
    id: 'c27ab88e-375c-4e98-aa94-8a180150a797',
    type: 'incoming',
    from: 'mike-bro@mail.ru',
    to: 'alextimoshenko@mail.ru',
    theme: 'About restautant',
    cathegory: 'social',
    body: 'No burgers again. But Chef Pizza is the best one',
    date: '11.04.2022',
    checked: false,
    sender: {
      id: '0101982e9-b432-4b7d-aec6-7f6ff2e6jjjj',
      name: 'Mike',
      avatar: '',
    }
  },
  {
    id: 'abc0c5e1-cd57-4f0a-99d9-00e6b4533b3a',
    type: 'incoming',
    from: 'lollydolly@gmail.com',
    to: 'alextimoshenko@mail.ru',
    theme: 'Californication',
    cathegory: 'news',
    body: 'Good for lunch',
    date: '14.12.2021',
    checked: false,
    sender: {
      id: 'c3d4abd4-c3ef-46e1-8719-eb17db1d6e99',
      name: 'Lolly',
      avatar: '',
    }
  },
  {
    id: '13b642d7-5e86-4717-a466-0640a1dee076',
    type: 'incoming',
    from: 'agataaa@mail.com',
    to: 'alextimoshenko@mail.ru',
    theme: 'Relax Time',
    cathegory: 'news',
    body: 'Best bakery',
    date: '01.01.2020',
    checked: true,
    sender: {
      id: '52a63cc0-5a6f-41f3-9774-0161ea4c9b0c',
      name: 'Agata',
      avatar: '',
    }
  },
  {
    id: '5db6247b-ab1c-49db-be1f-8dd27fd38b81',
    type: 'incoming',
    from: 'payne@gmail.com',
    to: 'alextimoshenko@mail.ru',
    theme: 'Travel',
    cathegory: 'news',
    body: 'Ready to go in Tokyo',
    date: '30.07.2021',
    checked: false,
    sender: {
      id: 'aaaa82e9-b422-4b2d-a111-7f6ff2e644bb',
      name: 'Alex',
      avatar: '',
    }
  },
  {
    id: '381b0c31-6360-43ff-80d1-581a116159d8',
    type: 'incoming',
    from: 'ligth@gmail.com',
    to: 'alextimoshenko@mail.ru',
    theme: 'Californication',
    cathegory: 'news',
    body: 'New product for your',
    date: '21.09.2021',
    checked: true,
    sender: {
      id: '1547335a-ea18-4547-a73d-32bd6e9f651c',
      name: 'Rebeca',
      email: 'ligth@gmail.com',
      avatar: '',
    }
  },
];

const tabs = [
  {id: 0, label: 'Входящие', route: 'incoming'}, 
  {id: 1, label: 'Отправленные', route: 'sent'},
  {id: 2, label: 'Черновики', route: 'drafts'},
  {id: 3, label: 'Спам', route: 'spam'},
  {id: 4, label: 'Корзина', route: 'basket'},
]

module.exports = {
  sentMails: sentMails,
  incomingMails: incomingMails,
  mails: mails,
  tabs: tabs,
};
