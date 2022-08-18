export default function handler(req, res) {
    // TODO: use news later
    res.status(200).json({
        list: [
            {
                list: [
                    {
                        ann_id: 1,
                        title: "Welcome to YuukiPS",
                        subtitle: "Welcome",
                        banner: "https://gitlab.com/yukiz/grasscutter-data/-/raw/main/data/hk4e/announcement/image/banner1.jpg",
                        content: "",
                        type_label: "System",
                        tag_label: 2,
                        tag_icon:
                            "https://gitlab.com/yukiz/grasscutter-data/-/raw/main/data/hk4e/announcement/image/alert/warning.png",
                        login_alert: 1,
                        lang: "en-US",
                        start_time: "2022-07-13 07:00:00",
                        end_time: "2030-08-24 06:00:00",
                        type: 2,
                        remind: 1,
                        alert: 0,
                        tag_start_time: "2000-01-02 15:04:05",
                        tag_end_time: "2030-01-02 15:04:05",
                        remind_ver: 1,
                        has_content: true,
                        extra_remind: 1,
                    },
                    {
                        ann_id: 2,
                        title: "Halaman Preview Versi 3.0 \"Fajar Seribu Mawar\" Resmi Dibuka!",
                        subtitle: "Preview Genshin Impact v3.0",
                        banner: "https://gitlab.com/yukiz/grasscutter-data/-/raw/main/data/hk4e/announcement/image/banner2.jpg",
                        content: "",
                        type_label: "System",
                        tag_label: "2",
                        tag_icon: "https://gitlab.com/yukiz/grasscutter-data/-/raw/main/data/hk4e/announcement/image/alert/warning.png",
                        login_alert: 1,
                        lang: "en-US",
                        start_time: "2022-08-14 12:00:00",
                        end_time: "2022-08-21 23:59:00",
                        type: 2,
                        remind: 1,
                        alert: 0,
                        tag_start_time: "2000-01-02 15:04:05",
                        tag_end_time: "2030-01-02 15:04:05",
                        remind_ver: 1,
                        has_content: true,
                        extra_remind: 1
                      },
                ],
                type_id: 2,
                type_label: "System",
            },
            {
                list: [{}],
                type_id: 3,
                type_label: "Events",
            },
        ],
        total: 1,
        type_list: [
            {
                id: 2,
                name: "游戏系统公告",
                mi18n_name: "System",
            },
            {
                id: 1,
                name: "活动公告",
                mi18n_name: "Activity",
            },
        ],
        alert: false,
        alert_id: 0,
        timezone: 8,
        t: "{{SYSTEM_TIME}}",
        pic_list: [],
        pic_total: 0,
        pic_type_list: [],
        pic_alert: false,
        pic_alert_id: 0,
        static_sign: "",
    });
}
