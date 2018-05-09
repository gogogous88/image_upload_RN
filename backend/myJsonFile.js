module.exports = app => {
  app.get("/jsonfile?json", (req, res) => {
    const a = [
      { value: 0, label: "专职导游" },
      { value: 1, label: "B照巴士司机" },
      { value: 2, label: "司兼导" },
      { value: 3, label: "自带15座高顶奔驰" },
      { value: 4, label: "自带12座高顶奔驰" },
      { value: 5, label: "自带12坐福特" },
      { value: 6, label: "自带7坐商旅车" },
      { value: 7, label: "自带5坐SUV" },
      { value: 8, label: "可做翻译" },
      { value: 9, label: "提供导游之家" },
      { value: 10, label: "代理门票" },
      { value: 11, label: "提供早餐" },
      { value: 12, label: "提供各类项目" }
    ];
    const b = JSON.parse(a);
    res.json(b);
  });
};
