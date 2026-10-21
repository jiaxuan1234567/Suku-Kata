import type { Question } from "../types";

/**
 * QUESTION BANK
 * ------------------------------------------------------------
 * To add a new question, copy one object below and change:
 * 1. id
 * 2. word
 * 3. image
 * 4. fallbackEmoji
 * 5. syllables (the correct answer, in order)
 * 6. options (4 buttons; every id must be unique)
 * 7. audio paths
 *
 * Put pictures in: public/images/
 * Put syllable MP3s in: public/audio/syllables/
 * Put full-word MP3s in: public/audio/words/
 */
export const QUESTION_BANK: Question[] = [
  {
    id: "buku",
    word: "BUKU",
    image: "/images/buku.png",
    fallbackEmoji: "📚",
    syllables: ["BU", "KU"],
    options: [
      { id: "buku-bu", text: "BU" },
      { id: "buku-ku", text: "KU" },
      { id: "buku-ba", text: "BA" },
      { id: "buku-ka", text: "KA" },
    ],
    audio: {
      syllables: {
        BU: "/audio/syllables/bu.mp3",
        KU: "/audio/syllables/ku.mp3",
        BA: "/audio/syllables/ba.mp3",
        KA: "/audio/syllables/ka.mp3",
      },
      word: "/audio/words/buku.mp3",
    },
  },
  {
    id: "baju",
    word: "BAJU",
    image: "/images/baju.png",
    fallbackEmoji: "👕",
    syllables: ["BA", "JU"],
    options: [
      { id: "baju-ba", text: "BA" },
      { id: "baju-ju", text: "JU" },
      { id: "baju-bu", text: "BU" },
      { id: "baju-ku", text: "KU" },
    ],
    audio: {
      syllables: {
        BA: "/audio/syllables/ba.mp3",
        JU: "/audio/syllables/ju.mp3",
        BU: "/audio/syllables/bu.mp3",
        KU: "/audio/syllables/ku.mp3",
      },
      word: "/audio/words/baju.mp3",
    },
  },
  {
    id: "bola",
    word: "BOLA",
    image: "/images/bola.png",
    fallbackEmoji: "⚽",
    syllables: ["BO", "LA"],
    options: [
      { id: "bola-bo", text: "BO" },
      { id: "bola-la", text: "LA" },
      { id: "bola-lo", text: "LO" },
      { id: "bola-ba", text: "BA" },
    ],
    audio: {
      syllables: {
        BO: "/audio/syllables/bo.mp3",
        LA: "/audio/syllables/la.mp3",
        LO: "/audio/syllables/lo.mp3",
        BA: "/audio/syllables/ba.mp3",
      },
      word: "/audio/words/bola.mp3",
    },
  },
  {
    id: "kuda",
    word: "KUDA",
    image: "/images/kuda.png",
    fallbackEmoji: "🐴",
    syllables: ["KU", "DA"],
    options: [
      { id: "kuda-ku", text: "KU" },
      { id: "kuda-da", text: "DA" },
      { id: "kuda-ka", text: "KA" },
      { id: "kuda-ta", text: "TA" },
    ],
    audio: {
      syllables: {
        KU: "/audio/syllables/ku.mp3",
        DA: "/audio/syllables/da.mp3",
        KA: "/audio/syllables/ka.mp3",
        TA: "/audio/syllables/ta.mp3",
      },
      word: "/audio/words/kuda.mp3",
    },
  },
  {
    id: "kaki",
    word: "KAKI",
    image: "/images/kaki.png",
    fallbackEmoji: "🦶",
    syllables: ["KA", "KI"],
    options: [
      { id: "kaki-ka", text: "KA" },
      { id: "kaki-ki", text: "KI" },
      { id: "kaki-ku", text: "KU" },
      { id: "kaki-ta", text: "TA" },
    ],
    audio: {
      syllables: {
        KA: "/audio/syllables/ka.mp3",
        KI: "/audio/syllables/ki.mp3",
        KU: "/audio/syllables/ku.mp3",
        TA: "/audio/syllables/ta.mp3",
      },
      word: "/audio/words/kaki.mp3",
    },
  },
  {
    id: "mata",
    word: "MATA",
    image: "/images/mata.png",
    fallbackEmoji: "👀",
    syllables: ["MA", "TA"],
    options: [
      { id: "mata-ma", text: "MA" },
      { id: "mata-ta", text: "TA" },
      { id: "mata-na", text: "NA" },
      { id: "mata-ka", text: "KA" },
    ],
    audio: {
      syllables: {
        MA: "/audio/syllables/ma.mp3",
        TA: "/audio/syllables/ta.mp3",
        NA: "/audio/syllables/na.mp3",
        KA: "/audio/syllables/ka.mp3",
      },
      word: "/audio/words/mata.mp3",
    },
  },
  {
    id: "meja",
    word: "MEJA",
    image: "/images/meja.png",
    fallbackEmoji: "🪑",
    syllables: ["ME", "JA"],
    options: [
      { id: "meja-me", text: "ME" },
      { id: "meja-ja", text: "JA" },
      { id: "meja-ma", text: "MA" },
      { id: "meja-ju", text: "JU" },
    ],
    audio: {
      syllables: {
        ME: "/audio/syllables/me.mp3",
        JA: "/audio/syllables/ja.mp3",
        MA: "/audio/syllables/ma.mp3",
        JU: "/audio/syllables/ju.mp3",
      },
      word: "/audio/words/meja.mp3",
    },
  },
  {
    id: "susu",
    word: "SUSU",
    image: "/images/susu.png",
    fallbackEmoji: "🥛",
    syllables: ["SU", "SU"],
    options: [
      { id: "susu-su-1", text: "SU" },
      { id: "susu-su-2", text: "SU" },
      { id: "susu-sa", text: "SA" },
      { id: "susu-si", text: "SI" },
    ],
    audio: {
      syllables: {
        SU: "/audio/syllables/su.mp3",
        SA: "/audio/syllables/sa.mp3",
        SI: "/audio/syllables/si.mp3",
      },
      word: "/audio/words/susu.mp3",
    },
  },
  {
    id: "roti",
    word: "ROTI",
    image: "/images/roti.png",
    fallbackEmoji: "🍞",
    syllables: ["RO", "TI"],
    options: [
      { id: "roti-ro", text: "RO" },
      { id: "roti-ti", text: "TI" },
      { id: "roti-ri", text: "RI" },
      { id: "roti-to", text: "TO" },
    ],
    audio: {
      syllables: {
        RO: "/audio/syllables/ro.mp3",
        TI: "/audio/syllables/ti.mp3",
        RI: "/audio/syllables/ri.mp3",
        TO: "/audio/syllables/to.mp3",
      },
      word: "/audio/words/roti.mp3",
    },
  },
  {
    id: "gigi",
    word: "GIGI",
    image: "/images/gigi.png",
    fallbackEmoji: "🦷",
    syllables: ["GI", "GI"],
    options: [
      { id: "gigi-gi-1", text: "GI" },
      { id: "gigi-gi-2", text: "GI" },
      { id: "gigi-ga", text: "GA" },
      { id: "gigi-gu", text: "GU" },
    ],
    audio: {
      syllables: {
        GI: "/audio/syllables/gi.mp3",
        GA: "/audio/syllables/ga.mp3",
        GU: "/audio/syllables/gu.mp3",
      },
      word: "/audio/words/gigi.mp3",
    },
  },
  {
    id: "topi",
    word: "TOPI",
    image: "/images/topi.png",
    fallbackEmoji: "🧢",
    syllables: ["TO", "PI"],
    options: [
      { id: "topi-to", text: "TO" },
      { id: "topi-pi", text: "PI" },
      { id: "topi-ti", text: "TI" },
      { id: "topi-po", text: "PO" },
    ],
    audio: {
      syllables: {
        TO: "/audio/syllables/to.mp3",
        PI: "/audio/syllables/pi.mp3",
        TI: "/audio/syllables/ti.mp3",
        PO: "/audio/syllables/po.mp3",
      },
      word: "/audio/words/topi.mp3",
    },
  },
  {
    id: "sapu",
    word: "SAPU",
    image: "/images/sapu.png",
    fallbackEmoji: "🧹",
    syllables: ["SA", "PU"],
    options: [
      { id: "sapu-sa", text: "SA" },
      { id: "sapu-pu", text: "PU" },
      { id: "sapu-su", text: "SU" },
      { id: "sapu-pa", text: "PA" },
    ],
    audio: {
      syllables: {
        SA: "/audio/syllables/sa.mp3",
        PU: "/audio/syllables/pu.mp3",
        SU: "/audio/syllables/su.mp3",
        PA: "/audio/syllables/pa.mp3",
      },
      word: "/audio/words/sapu.mp3",
    },
  },
  {
    id: "lori",
    word: "LORI",
    image: "/images/lori.png",
    fallbackEmoji: "🚚",
    syllables: ["LO", "RI"],
    options: [
      { id: "lori-lo", text: "LO" },
      { id: "lori-ri", text: "RI" },
      { id: "lori-ro", text: "RO" },
      { id: "lori-li", text: "LI" },
    ],
    audio: {
      syllables: {
        LO: "/audio/syllables/lo.mp3",
        RI: "/audio/syllables/ri.mp3",
        RO: "/audio/syllables/ro.mp3",
        LI: "/audio/syllables/li.mp3",
      },
      word: "/audio/words/lori.mp3",
    },
  },
  {
    id: "nasi",
    word: "NASI",
    image: "/images/nasi.png",
    fallbackEmoji: "🍚",
    syllables: ["NA", "SI"],
    options: [
      { id: "nasi-na", text: "NA" },
      { id: "nasi-si", text: "SI" },
      { id: "nasi-ni", text: "NI" },
      { id: "nasi-sa", text: "SA" },
    ],
    audio: {
      syllables: {
        NA: "/audio/syllables/na.mp3",
        SI: "/audio/syllables/si.mp3",
        NI: "/audio/syllables/ni.mp3",
        SA: "/audio/syllables/sa.mp3",
      },
      word: "/audio/words/nasi.mp3",
    },
  },
  {
    id: "jari",
    word: "JARI",
    image: "/images/jari.png",
    fallbackEmoji: "☝️",
    syllables: ["JA", "RI"],
    options: [
      { id: "jari-ja", text: "JA" },
      { id: "jari-ri", text: "RI" },
      { id: "jari-ji", text: "JI" },
      { id: "jari-ra", text: "RA" },
    ],
    audio: {
      syllables: {
        JA: "/audio/syllables/ja.mp3",
        RI: "/audio/syllables/ri.mp3",
        JI: "/audio/syllables/ji.mp3",
        RA: "/audio/syllables/ra.mp3",
      },
      word: "/audio/words/jari.mp3",
    },
  },
];
