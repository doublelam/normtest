const request = require('request');
function getData(callback) {
  request({
    uri: 'https://www.sxl.cn/r/v1/sites/11586304/portfolio/products?per=999&page=1&categoryId=256924',
    method: 'get',
  },function(error, response, body){
    const products = JSON.parse(body).data.products;
    const newPro = products.sort((a,b) => a.id - b.id)
    let order = {};
    for (const index in products) {
      order[products[index].id] = Number(index);
    }
    console.log('order',order)
    // fixClient(order)
  })
}
function fixClient(order){
  request(
    {
      uri: 'https://www.sxl.cn/r/v1/sites/11586304/portfolio/categories/256924',
      form: {
        data: {orderList: order},
      },
      method: 'patch',
      headers: {
        "content-type": "application/json",
        "cookie": 'gr_user_id=c12d9351-1638-4eec-88c1-809e4d2275a2; ajs_group_id=null; _ga=GA1.2.621240880.1525660395; __strk_visitor_id=visotor-dd2de35cdad845819e88d557e138fd9c; __strk_suppress_rewards_tooltip=1; __strk_suppress_gallery_tooltip=1; __vero_user=367055; __strk_gallery_timestamp=1515830811; __strk_gallery_updates_available=0; __landing_utm_source=404; __landing_utm_medium=internal; __landing_utm_campaign=404_redirect; __landing_query=utm_source%3D404%26utm_medium%3Dinternal%26utm_campaign%3D404_redirect; __landing_ref_url=http%3A%2F%2Fqa.sxl.cn%2F; OUTFOX_SEARCH_USER_ID_NCOO=1419736249.289445; __vero_visit=true; Hm_lvt_91668c5f1b9f09ec14d36942ae04547c=1543976438; __landing_mixpanel_id=367055; _gid=GA1.2.1884712965.1545717025; ajs_user_id=%22367055%22; ajs_anonymous_id=%224fcfc5c0-3d35-47a3-ab6d-a971b67a2b13%22; __veroc4=%5B%5D; gr_session_id_9cd75b795e61ba6f=ae39b83d-4c0a-4947-bc35-580a84a49337; gr_session_id_9cd75b795e61ba6f_ae39b83d-4c0a-4947-bc35-580a84a49337=true; _pk_ref.2.e161=%5B%22%22%2C%22%22%2C1545879669%2C%22http%3A%2F%2Fqa.sxl.cn%2F%22%5D; _pk_ses.2.e161=*; lc_sso10385007=1545879670571; signed_in=1; locale=zh-CN; Hm_lpvt_91668c5f1b9f09ec14d36942ae04547c=1545879674; gr_cs1_ae39b83d-4c0a-4947-bc35-580a84a49337=id%3A367055; mp_148c9572222c821005a79bae1532fdde_mixpanel=%7B%22distinct_id%22%3A%20%22367055%22%2C%22mp_lib%22%3A%20%22Segment%3A%20web%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%2C%22mp_name_tag%22%3A%20%22don.lin%40strikingly.com%22%2C%22id%22%3A%20%22367055%22%2C%22features%22%3A%20%5B%5D%2C%22first_name%22%3A%20%22Lam%22%2C%22last_name%22%3A%20%22%22%2C%22phone%22%3A%20%22%22%2C%22skip_phone_verification%22%3A%20false%2C%22social_channel%22%3A%20null%2C%22created_timestamp%22%3A%201526269176%2C%22sign_in_count%22%3A%204%2C%22source%22%3A%20null%2C%22ref%22%3A%20null%2C%22user_type%22%3A%20%22%22%2C%22is_reseller_agent%22%3A%20false%2C%22is_reseller_client%22%3A%20false%2C%22first_time_log_in%22%3A%20false%2C%22membership%22%3A%20%22free%22%2C%22plan%22%3A%20%22free%22%2C%22subscription%22%3A%20%22free%22%2C%22period%22%3A%20null%2C%22is_on_trial%22%3A%20false%2C%22invitation_count%22%3A%200%2C%22page_count%22%3A%202%2C%22published_page_count%22%3A%200%2C%22db_utm_source%22%3A%20null%2C%22db_utm_medium%22%3A%20null%2C%22db_utm_term%22%3A%20null%2C%22db_utm_content%22%3A%20null%2C%22db_utm_campaign%22%3A%20null%2C%22db_utm_gclid%22%3A%20null%2C%22links_unsubscribe_url%22%3A%20%22http%3A%2F%2Fwww.sxl.cn%2Fs%2Fusers%2Fedit_email_settings%3Ftoken%3DZDZIQVVvZDFNeDU0WmhQeEI5M0UvMGhyUUhxQjFyZmxhOGlYdURPaTJac0hzcEY5eVJCYXJLK1QwQ3BzTk9HUTVzd0dCdkxaYTF1cm5iSmg2SnZLZXdMTGN0aXZUTlNMZWEzZlBUdmt3eHc9LS1NczZNY2IxNGNIYjcyTDZkNG1vdWpBPT0%3D--14176d511d7d398689f783768ab152c5772e5ea1%22%2C%22analytics_vendor%22%3A%20%22keenio%22%2C%22locale%22%3A%20%22zh-CN%22%2C%22%24created%22%3A%20%222018-05-14T03%3A39%3A36.409Z%22%2C%22%24email%22%3A%20%22don.lin%40strikingly.com%22%2C%22%24first_name%22%3A%20%22Lam%22%2C%22%24last_name%22%3A%20%22%22%2C%22%24name%22%3A%20%22Lam%22%2C%22email%22%3A%20null%2C%22__alias%22%3A%20%22830%22%2C%22has_payment_account%22%3A%20false%2C%22card_last4%22%3A%20null%2C%22utm_source%22%3A%20%22404%22%2C%22utm_medium%22%3A%20%22internal%22%2C%22utm_campaign%22%3A%20%22404_redirect%22%2C%22%24user_id%22%3A%20%22367055%22%2C%22is_dt_service%22%3A%20false%2C%22premium_page_quota%22%3A%200%2C%22is_dt_sales%22%3A%20false%7D; _pk_id.2.e161=a9b2180804fa2dee.1525660396.130.1545879677.1545879669.; XSRF-TOKEN=7xEyqHVKcvUhIakpL8ILwmuXptXYIWnAgGwrFGT2py%2BINeZ0a6t2WK6uE1hBLVyHbuHQYJRSVB8kCACrgMHpzg%3D%3D; _bobcat_session=L3orempyTFVnVzhuRW56ZEgvbXVwdlpyQU9JeXBFS3JZRTNpbUdoZ3JySTdlWGtSQnJ3V2VIMldXZnU2WjRrMHhkTzlJTWxTdndvMTRWalZBaGNzK3Rnc0M2ZmhhNVk4UnA4bEh2czVBOThtRlZyRUg0ZEVQSUMyYkxZUWZ1aEdaSGJTVklFcHN3bjRTSjdhM0E0bmU4ZFpGeGhmY1dSR01EQ3dpVmFEYldNVEd2cEFBRGk0WWJEaENiUHpwellvN1RhTXR0OGh0NWhJM1hlTnZqTWVtS1cydGtPc2VVa2d6SzZHbGhLTFVTRnFBYVhHQys5NEVlMzRXdmExdEdCTW9SdVI2Ukhsc041WWM1V2F1T1crZjcrTkc1OXlOanBRbzBtSEVmYjk4MVVNM3IrL0UzWnR4NTFNRnYzRjl0QkpXU3lyVmhXU05XVVlucjRoUmJCaEVuYjVIZ3JSbndVTDdYWEVkRXZuVXowPS0tUWxlbmhDSWYvaXBsandNWUh6QTBxQT09--4b62b3ef4a6c9aa9bbf4785917250e532b7b9fe2',
        'accept': 'application/json',
        'X-CSRF-Token': 'lABwqHasHZ/yrEy0gxp9bdvnYo3EsWqyXyMwpZ21UtvzJKR0aE0ZMn0j9sXt9Soo3pEUOIjCV237RxsaeYIcOg==',
      }
    },
    function(error, response, body) {
      console.log('error', error, 'res', response, 'body', body)
    }
  );

}

getData()