import r13 from "../assets/icons/r13.png";
import r12 from "../assets/icons/r12.png";
import r11 from "../assets/icons/r11.png";
import r10 from "../assets/icons/r10.png";
import r9 from "../assets/icons/r9.png";
import r8 from "../assets/icons/r8.png";
import r7 from "../assets/icons/r7.png";
import r6 from "../assets/icons/r6.png";
import r5 from "../assets/icons/r5.png";
import r4 from "../assets/icons/r4.png";
import r3 from "../assets/icons/r3.png";
import r2 from "../assets/icons/r2.png";

export interface IRanks {
    number: number,
    img: string,
    title:{horde: string, alliance: string},
    baseRp: number,
    newRp: number
}

export const Ranks: IRanks[] = [
    {
        number: 14,
        img: r13,
        title: { horde: 'Warlord', alliance: 'Field Marshal' },
        baseRp: 60000,
        newRp: 60001,
    },
    {
        number: 13,
        img: r13,
        title: { horde: 'Warlord', alliance: 'Field Marshal' },
        baseRp: 55000,
        newRp: 55001,
    },
    {
        number: 12,
        img: r12,
        title: { horde: 'General', alliance: 'Marshal' },
        baseRp: 50000,
        newRp: 50001,
    },
    {
        number: 11,
        img: r11,
        title: { horde: 'Lieutenant General', alliance: 'Commander' },
        baseRp: 45000,
        newRp: 45001,
    },
    {
        number: 10,
        img: r10,
        title: { horde: 'Champion', alliance: 'Lieutenant Commander' },
        baseRp: 40000,
        newRp: 40001,
    },
    {
        number: 9,
        img: r9,
        title: { horde: 'Centurion', alliance: 'Knight Champion' },
        baseRp: 35000,
        newRp: 35001,
    },
    {
        number: 8,
        img: r8,
        title: { horde: 'Legionnaire', alliance: 'Knight Captain' },
        baseRp: 30000,
        newRp: 30001,
    },
    {
        number: 7,
        img: r7,
        title: { horde: 'Blood Guard', alliance: 'Knight Lieutenant' },
        baseRp: 25000,
        newRp: 25001,
    },
    {
        number: 6,
        img: r6,
        title: { horde: 'Stone Guard', alliance: 'Knight' },
        baseRp: 20000,
        newRp: 20001,
    },
    {
        number: 5,
        img: r5,
        title: { horde: 'First Sergeant', alliance: 'Sergeant Major' },
        baseRp: 15000,
        newRp: 15001,
    },
    {
        number: 4,
        img: r4,
        title: { horde: 'Senior Sergeant', alliance: 'Master Sergeant' },
        baseRp: 10000,
        newRp: 10001,
    },
    {
        number: 3,
        img: r3,
        title: { horde: 'Sergeant', alliance: 'Sergeant' },
        baseRp: 5000,
        newRp: 5001,
    },
    {
        number: 2,
        img: r2,
        title: { horde: 'Grunt', alliance: 'Corporal' },
        baseRp: 2000,
        newRp: 2001,
    },
]