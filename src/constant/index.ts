export function Read_all_request_from_one_driver(driver_id : string){
    return `/api/request/${driver_id}`
}
export const read_add_remove_request = '/api/request'  // We manage it by id

export const move_request_to_history_put = 'api/edit_request'

export const history_url_from_user_session = "/api/trip/old"

export const Read_user_request = "api/request"

export const Wallet_request = '/api/user/wallet'
