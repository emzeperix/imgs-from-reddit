import { TOGGLE_VIEW, TOGGLE_AUTOPLAY, TOGGLE_PICTURES, TOGGLE_VIDEOS, TOGGLE_FETCHBY, MOBILE_SETTINGS, MOBILE_SEARCH } from '../actions/index';

/**
 * State of the view settings, fetchby flag: new / top, 
 * State of the mobile menus: open / closed
 * State of media settings: show videos / pictures / autoplay videos
 */
export function settingsReducer(state = {
    autoplay: true,
    videos: true,
    pictures: true,
    gridview: 'grid',
    fetchby: 'top',
    openmobilesearch: false,
    openmobilesets: false
}, action) {
    switch (action.type) {
        case TOGGLE_AUTOPLAY:
            return Object.assign({}, state, {
                autoplay: action.autoplay
            });
        case TOGGLE_VIEW:
            return Object.assign({}, state, {
                gridview: action.view
            });

        case TOGGLE_FETCHBY:
            return Object.assign({}, state, {
                fetchby: action.fetchby
            });

        case TOGGLE_VIDEOS:
            if (state.pictures !== false) {
                return Object.assign({}, state, {
                    videos: action.videos
                });

            };
            return state;

        case TOGGLE_PICTURES:
            if (state.videos !== false) {
                return Object.assign({}, state, {
                    pictures: action.pictures
                });
            };
            return state;

        // open mobile search menu - if setting menu was opened, close it.
        case MOBILE_SEARCH:
            let search_flag_0;
            let menu_flag_0;
            if (state.openmobilesearch === true) {
                search_flag_0 = false;
                menu_flag_0 = state.openmobilesets
            } else {
                search_flag_0 = true;
                menu_flag_0 = false;
            }
            return Object.assign({}, state, {
                openmobilesearch: search_flag_0,
                openmobilesets: menu_flag_0
            });
        case MOBILE_SETTINGS:
            let menu_flag_1;
            let search_flag_1;
            if (state.openmobilesets === true) {
                menu_flag_1 = false;
                search_flag_1 = state.openmobilesearch
            } else {
                menu_flag_1 = true;
                search_flag_1 = false;
            }
            return Object.assign({}, state, {
                openmobilesets: menu_flag_1,
                openmobilesearch: search_flag_1
            })
        default:
            return state;
    }
}

