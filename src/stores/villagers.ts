import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useVillagersStore = defineStore("villagers", () => {
  const dict: { [key: string]: string } = {
    Robin: "罗宾",
    Lewis: "刘易斯",
    Penny: "潘妮",
    Willy: "威利",
    Marnie: "玛妮",
    Demetrius: "德米特里厄斯",
    Evelyn: "艾芙琳",
    Caroline: "卡洛琳",
    Shane: "谢恩",
    Linus: "莱纳斯",
    Clint: "克林特",
    Gus: "格斯",
    Maru: "玛鲁",
    Jas: "贾斯",
    Vincent: "文森特",
    Emily: "艾米丽",
    Jodi: "乔迪",
    Leah: "莉亚",
    Elliott: "艾利欧特",
    Pam: "潘姆",
    Harvey: "哈维",
    George: "乔治",
    Alex: "亚历克斯",
    Haley: "海莉",
    Sebastian: "塞巴斯蒂安",
    Abigail: "阿比盖尔",
    Sam: "山姆",
    Wizard: "法师",
    Pierre: "皮埃尔",
    Kent: "肯特",
    Dwarf: "矮人",
    Krobus: "科罗布斯",
    Sandy: "桑迪",
    Leo: "雷欧",
  };
  const marryableArr = [
    "Alex",
    "Elliott",
    "Harvey",
    "Sam",
    "Sebastian",
    "Shane",
    "Abigail",
    "Emily",
    "Haley",
    "Leah",
    "Maru",
    "Penny",
  ];

  const name = (ipt: string) => {
    return dict[ipt] || ipt;
  };
  const marryable = (name: string) => {
    return marryableArr.includes(name);
  };
  return { name, marryable };
});
