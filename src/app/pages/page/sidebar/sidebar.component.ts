import { Component, Input, OnInit } from '@angular/core';
import { Role } from 'src/app/common/Role.enum';
import { BaseComponentComponent } from '../base-component/base-component.component';

class ListSideBarItem {
  ID: Number | undefined;
  IsParent: boolean | undefined;
  ParentID: number | undefined;
  Text: string | undefined;
  Role: number | undefined;
  IsShow: boolean | undefined;
  Icon: string | undefined;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent extends BaseComponentComponent implements OnInit {
  constructor() {
    super();
  }

  @Input()
  isCollapsed: boolean = false;

  // List sidebar lấy từ BE
  listSideBar: Array<ListSideBarItem> = [
    {
      ID: 1,
      IsParent: true,
      ParentID: 0,
      Text: 'DashBoard',
      Role: Role.All,
      IsShow: true,
      Icon: 'dashboard',
    },
    {
      ID: 2,
      IsParent: false,
      ParentID: 1,
      Text: 'Quản lý nhân viên',
      Role: Role.All,
      IsShow: true,
      Icon: '',
    },
    {
      ID: 3,
      IsParent: false,
      ParentID: 1,
      Text: 'Thống kê doanh số',
      Role: Role.All,
      IsShow: true,
      Icon: '',
    },
    {
      ID: 7,
      IsParent: false,
      ParentID: 1,
      Text: 'Quản lý sản phẩm',
      Role: Role.All,
      IsShow: true,
      Icon: '',
    },
    {
      ID: 4,
      IsParent: true,
      ParentID: 0,
      Text: 'Settings',
      Role: Role.All,
      IsShow: true,
      Icon: '',
    },
    {
      ID: 5,
      IsParent: false,
      ParentID: 4,
      Text: 'Quản lý thông tin tài khoản',
      Role: Role.All,
      IsShow: true,
      Icon: '',
    },
    {
      ID: 6,
      IsParent: false,
      ParentID: 4,
      Text: 'Đăng xuất',
      Role: Role.All,
      IsShow: true,
      Icon: '',
    },
  ];

  // List sau khi được xử lý
  listSideBarSort: Array<any> = [];

  override ngOnInit(): void {
    this.handleListSidebar();
  }

  // Xử lý list trả về
  handleListSidebar() {
    if (this.listSideBar && this.listSideBar.length > 0) {
      this.listSideBarSort = this.listSideBar.filter((e) => e['IsParent']);
      this.listSideBarSort.forEach((e) => {
        e['listChild'] = [
          ...this.listSideBar.filter((el) => el.ParentID == e.ID),
        ];
      });
    }
  }
}
