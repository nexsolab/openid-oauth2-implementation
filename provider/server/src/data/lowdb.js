import low from 'lowdb';
import Memory from 'lowdb/adapters/Memory';

const db = low(new Memory());

try {
  db.defaults({
    users: [
      {
        _id: '23121d3c-84df-44ac-b458-3d63a9a05497',
        email: 'karina@exemplo.com.br',
        email_verified: true,
        picture_url: 'https://randomuser.me/api/portraits/women/57.jpg',
        tenantId: 1,
      },
      {
        _id: 'c2ac2b4a-2262-4e2f-847a-a40dd3c4dcd5',
        email: 'manoel@exemplo.com.br',
        email_verified: false,
        picture_url: 'https://randomuser.me/api/portraits/men/40.jpg',
        tenantId: 2,
      },
    ],

    scopes: [
      {
        _id: 'email',
        title: 'Endereço de e-mail',
        desc: `A aplicação irá saber qual seu endereço de e-mail, e poderá 
        te enviar mensagens através dele.`,
        grantable: true,
      },
      {
        _id: 'openid',
        title: 'OpenID',
        grantable: false,
      },
    ],
  }).write();
} catch (error) {
  console.error(error);
}

export default db;
