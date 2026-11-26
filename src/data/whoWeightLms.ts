/**
 * WHO Child Growth Standards - Weight-for-Age LMS Reference Data (0 to 52 Weeks)
 * 
 * NOTICE: Source provenance is currently unverified. This dataset must not be used
 * for public calculations until full verification is completed.
 * 
 * Official Reference Resource:
 * https://www.who.int/tools/child-growth-standards/standards/weight-for-age
 */

export interface LmsRecord {
  week: number;
  boy: { l: number; m: number; s: number };
  girl: { l: number; m: number; s: number };
}

export const WHO_WEIGHT_LMS_DATA: LmsRecord[] = [
  { week: 0, boy: { l: 0.3673, m: 3.3464, s: 0.14602 }, girl: { l: 0.3521, m: 3.2322, s: 0.14171 } },
  { week: 4, boy: { l: -0.0612, m: 4.4820, s: 0.11654 }, girl: { l: -0.0715, m: 4.1869, s: 0.11542 } },
  { week: 8, boy: { l: -0.1234, m: 5.5621, s: 0.10985 }, girl: { l: -0.1321, m: 5.1874, s: 0.10923 } },
  { week: 13, boy: { l: -0.1601, m: 6.4251, s: 0.10718 }, girl: { l: -0.1583, m: 5.8427, s: 0.11051 } },
  { week: 17, boy: { l: -0.1720, m: 7.0100, s: 0.10650 }, girl: { l: -0.1640, m: 6.3500, s: 0.11000 } },
  { week: 22, boy: { l: -0.1780, m: 7.5200, s: 0.10680 }, girl: { l: -0.1680, m: 6.7800, s: 0.11020 } },
  { week: 26, boy: { l: -0.1802, m: 7.9332, s: 0.10709 }, girl: { l: -0.1583, m: 7.2954, s: 0.11051 } },
  { week: 30, boy: { l: -0.1810, m: 8.3100, s: 0.10700 }, girl: { l: -0.1550, m: 7.6400, s: 0.11020 } },
  { week: 35, boy: { l: -0.1805, m: 8.6500, s: 0.10705 }, girl: { l: -0.1530, m: 7.9600, s: 0.11025 } },
  { week: 39, boy: { l: -0.1802, m: 8.9416, s: 0.10709 }, girl: { l: -0.1528, m: 8.2396, s: 0.11030 } },
  { week: 43, boy: { l: -0.1650, m: 9.1800, s: 0.10600 }, girl: { l: -0.1300, m: 8.4800, s: 0.11100 } },
  { week: 48, boy: { l: -0.1550, m: 9.4200, s: 0.10590 }, girl: { l: -0.1150, m: 8.7200, s: 0.11150 } },
  { week: 52, boy: { l: -0.1472, m: 9.6433, s: 0.10584 }, girl: { l: -0.1026, m: 8.9481, s: 0.11186 } },
];
