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
    }
  
    const menu_items = await fetch("https://right-look-production.up.railway.app/items/menu_item?fields=*.*").then((result) => result.json())
    const top_level_items = menu_items['data'].filter((item: MenuItem) => item && item['drop_down_menu_list'])
    return top_level_items
  }
}
  