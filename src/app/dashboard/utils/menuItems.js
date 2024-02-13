import {CollaborationOutlined, ReceiptTextOutlined, UsersOutlined} from '@/templates/icons';

export const menuItems = [
  {
    key: 'users',
    label: 'کاربران',
    icon: <UsersOutlined className="!text-[25px]" />,
    link: '/dashboard/users'
  },
  {
    key: 'reservations',
    label: 'لیست رزرو ها',
    icon: <ReceiptTextOutlined className="!text-[25px]" />,
    link: '/dashboard/reservations'
  },
  {
    key: 'cooperation',
    label: 'درخواست های همکاری',
    icon: <CollaborationOutlined className="!text-[25px]" />,
    link: '/dashboard/cooperation'
  }
];
