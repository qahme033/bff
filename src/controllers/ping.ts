import { Get, Route } from "tsoa";
import axios, {AxiosResponse} from 'axios';

interface PingResponse {
  message: string;
}

@Route("get_navbar_menu_items")
export default class PingController {
  @Get("/")
  public async getMessage(): Promise<Promise<Response>> {
    // const menu_items = await fetch("http://0.0.0.0:8055/items/index_page")
    // console.log(menu_items)
    interface MenuItem {
      icon: string;
      name: string;
      id: number;
      parent_id: string;
      sort: any;
      date_created: string;
      date_updated: string;
      drop_down_menu_list: [];
      is_parent: boolean;
      has_icon: boolean;
      
    }
  
    const menu_items = await fetch("https://africahornads-cms-production.up.railway.app/items/menu_item?fields=*.*&sort[]=id").then((result) => result.json())
    const top_level_items = menu_items['data'].filter((item: MenuItem) => item && item.is_parent)
    top_level_items.map((item: MenuItem) => item.has_icon =item && item.is_parent && item.drop_down_menu_list.length > 0)
    return top_level_items
  }
}
  