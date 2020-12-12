// tslint:disable max-line-length

import {W07, W10, W11, W13, W14} from "../constants"
import {Code, Uni, Unit} from "../types"

// TODO: REPO ORGANIZATION: SHOULD I USE @SAGITTAL/SYSTEM'S UNICODES?
//  I considered pulling these unicodes in from @sagittal/system, but decided not to bloat it for the forum
//  Probably revisit this decision after extracting staffCode to its own repo

const _5v7kUp = "" as Uni                  // U+E300   5:7 kleisma up, (5:7k, ~11:13k, 7C less 5C)
const _5v7kDown = "" as Uni                // U+E301   5:7 kleisma down
const _5CUp = "" as Uni                    // U+E302   5 comma up, (5C), 1° up [22 27 29 34 41 46 53 96-EDOs], 1/12-tone up
const _5CDown = "" as Uni                  // U+E303   5 comma down, 1° down [22 27 29 34 41 46 53 96-EDOs], 1/12-tone down
const _7CUp = "" as Uni                    // U+E304   7 comma up, (7C), 1° up [43-EDO], 2° up [72-EDO], 1/6-tone up
const _7CDown = "" as Uni                  // U+E305   7 comma down, 1° down [43-EDO], 2° down [72-EDO], 1/6-tone down
const _25SUp = "" as Uni                   // U+E306   25 small diesis up, (25S, ~5:13S, ~37S, 5C plus 5C), 2° up [53-EDO]
const _25SDown = "" as Uni                 // U+E307   25 small diesis down, 2° down [53-EDO]
const _35MUp = "" as Uni                   // U+E308   35 medium diesis up, (35M, ~13M, ~125M, 5C plus 7C), 2/9-tone up
const _35MDown = "" as Uni                 // U+E309   35 medium diesis down, 1°[50] 2°[27] down, 2/9-tone down
const _11MUp = "" as Uni                   // U+E30A   11 medium diesis up, (11M), 1°[17 31] 2°46 up, 1/4-tone up
const _11MDown = "" as Uni                 // U+E30B   11 medium diesis down, 1°[17 31] 2°46 down, 1/4-tone down
const _11LUp = "" as Uni                   // U+E30C   11 large diesis up, (11L), (sharp less 11M), 3° up [46-EDO]
const _11LDown = "" as Uni                 // U+E30D   11 large diesis down, 3° down [46-EDO]
const _35LUp = "" as Uni                   // U+E30E   35 large diesis up, (35L, ~13L, ~125L, sharp less 35M), 2°50 up
const _35LDown = "" as Uni                 // U+E30F   35 large diesis down, 2° down [50-EDO], 5/18-tone down

const sharp25SDown = "" as Uni             // U+E310   Sharp 25S-down, 3° up [53-EDO]
const flat25SUp = "" as Uni                // U+E311   Flat 25S-up, 3° down [53-EDO]
const sharp7CDown = "" as Uni              // U+E312   Sharp 7C-down, 2° up [43-EDO], 4° up [72-EDO], 1/3-tone up
const flat7CUp = "" as Uni                 // U+E313   Flat 7C-up, 2° down [43-EDO], 4° down [72-EDO], 1/3-tone down
const sharp5CDown = "" as Uni              // U+E314   Sharp 5C-down, 2°[22 29] 3°[27 34 41] 4°[39 46 53] 5°[72] 7°[96] up, 5/12-tone up
const flat5CUp = "" as Uni                 // U+E315   Flat 5C-up, 2°[22 29] 3°[27 34 41] 4°[39 46 53] 5°[72] 7°[96] down, 5/12-tone down
const sharp5v7kDown = "" as Uni            // U+E316   Sharp 5:7k-down
const flat5v7kUp = "" as Uni               // U+E317   Flat 5:7k-up
const apotomeUp = "" as Uni                // U+E318   Sharp, (apotome up)[almost all-EDOs], 1/2-tone up
const apotomeDown = "" as Uni              // U+E319   Flat, (apotome down)[almost all-EDOs], 1/2-tone down
const sharp5v7kUp = "" as Uni              // U+E31C   Sharp 5:7k-up
const flat5v7kDown = "" as Uni             // U+E31D   Flat 5:7k-down
const sharp5CUp = "" as Uni                // U+E31E   Sharp 5C-up, 4°[22 29] 5°[27 34 41] 6°[39 46 53] up, 7/12-tone up
const flat5CDown = "" as Uni               // U+E31F   Flat 5C-down, 4°[22 29] 5°[27 34 41] 6°[39 46 53] down, 7/12-tone down
const sharp7CUp = "" as Uni                // U+E320   Sharp 7C-up, 4° up [43-EDO], 8° up [72-EDO], 2/3-tone up
const flat7CDown = "" as Uni               // U+E321   Flat 7C-down, 4° down [43-EDO], 8° down [72-EDO], 2/3-tone down
const sharp25SUp = "" as Uni               // U+E322   Sharp 25S-up, 7° up [53-EDO]
const flat25SDown = "" as Uni              // U+E323   Flat 25S-down, 7° down [53-EDO]
const sharp35MUp = "" as Uni               // U+E324   Sharp 35M-up, 4° up [50-EDO], 6° up [27-EDO], 13/18-tone up
const flat35MDown = "" as Uni              // U+E325   Flat 35M-down, 4° down [50-EDO], 6° down [27-EDO], 13/18-tone down
const sharp11MUp = "" as Uni               // U+E326   Sharp 11M-up, 3° up [17 31-EDOs], 7° up [46-EDO], 3/4-tone up
const flat11MDown = "" as Uni              // U+E327   Flat 11M-down, 3° down [17 31-EDOs], 7° down [46-EDO], 3/4-tone down
const sharp11LUp = "" as Uni               // U+E328   Sharp 11L-up, 8° up [46-EDO]
const flat11LDown = "" as Uni              // U+E329   Flat 11L-down, 8° up [46-EDO]
const sharp35LUp = "" as Uni               // U+E32A   Sharp 35L-up, 5° up [50-EDO]
const flat35LDown = "" as Uni              // U+E32B   Flat 35L-down, 5° down [50-EDO]
const doubleSharp25SDown = "" as Uni       // U+E32C   Double sharp 25S-down, 8°up [53-EDO]
const doubleFlat25SUp = "" as Uni          // U+E32D   Double flat 25S-up, 8°down [53-EDO]
const doubleSharp7CDown = "" as Uni        // U+E32E   Double sharp 7C-down, 5°[43] 10°[72] up, 5/6-tone up
const doubleFlat7CUp = "" as Uni           // U+E32F   Double flat 7C-up, 5° down [43-EDO], 10° down [72-EDO], 5/6-tone down
const doubleSharp5CDown = "" as Uni        // U+E330   Double sharp 5C-down, 5°[22 29] 7°[34 41] 9°53 up, 11/12 tone up
const doubleFlat5CUp = "" as Uni           // U+E331   Double flat 5C-up, 5°[22 29] 7°[34 41] 9°53 down, 11/12 tone down
const doubleSharp5v7kDown = "" as Uni      // U+E332   Double sharp 5:7k-down
const doubleFlat5v7kUp = "" as Uni         // U+E333   Double flat 5:7k-up
const doubleSharp = "" as Uni              // U+E334   Double sharp, (2 apotomes up)[almost all-EDOs], whole-tone up
const doubleFlat = "" as Uni               // U+E335   Double flat, (2 apotomes down)[almost all-EDOs], whole-tone down

const _7v11kUp = "" as Uni                 // U+E340   7:11 kleisma up, (7:11k)
const _7v11kDown = "" as Uni               // U+E341   7:11 kleisma down
const _17CUp = "" as Uni                   // U+E342   17 comma up, (17C)
const _17CDown = "" as Uni                 // U+E343   17 comma down
const _55CUp = "" as Uni                   // U+E344   55 comma up, (55C, 11M less 5C), 3°up [96-EDO], 3/16-tone up
const _55CDown = "" as Uni                 // U+E345   55 comma down, 3° down [96-EDO], 3/16-tone down
const _7v11CUp = "" as Uni                 // U+E346   7:11 comma up, (7:11C, ~13:17S, ~29S, 11L less 7C), 1° up [60-EDO]
const _7v11CDown = "" as Uni               // U+E347   7:11 comma down, 1° down [60-EDO], 1/10-tone down
const _5v11SUp = "" as Uni                 // U+E348   5:11 small diesis up, (5:11S, ~7:13S, ~11:17S, 5:7k plus 7:11C)
const _5v11SDown = "" as Uni               // U+E349   5:11 small diesis down
const sharp5v11SDown = "" as Uni           // U+E34A   Sharp 5:11S-down
const flat5v11SUp = "" as Uni              // U+E34B   Flat 5:11S-up
const sharp7v11CDown = "" as Uni           // U+E34C   Sharp 7:11C-down, 4° up [60-EDO], 2/5-tone up
const flat7v11CUp = "" as Uni              // U+E34D   Flat 7:11C-up, 4° down [60-EDO], 2/5-tone down
const sharp55CDown = "" as Uni             // U+E34E   Sharp 55C-down, 5° up [96-EDO], 5/16-tone up
const flat55CUp = "" as Uni                // U+E34F   Flat 55C-up, 5° down [96-EDO], 5/16-tone down
const sharp17CDown = "" as Uni             // U+E350   Sharp 17C-down
const flat17CUp = "" as Uni                // U+E351   Flat 17C-up
const sharp7v11kDown = "" as Uni           // U+E352   Sharp 7:11k-down
const flat7v11kUp = "" as Uni              // U+E353   Flat 7:11k-up
const sharp7v11kUp = "" as Uni             // U+E354   Sharp 7:11k-up
const flat7v11kDown = "" as Uni            // U+E355   Flat 7:11k-down
const sharp17CUp = "" as Uni               // U+E356   Sharp 17C-up
const flat17CDown = "" as Uni              // U+E357   Flat 17C-down
const sharp55CUp = "" as Uni               // U+E358   Sharp 55C-up, 11° up [96-EDO], 11/16-tone up
const flat55CDown = "" as Uni              // U+E359   Flat 55C-down, 11° down [96-EDO], 11/16-tone down
const sharp7v11CUp = "" as Uni             // U+E35A   Sharp 7:11C-up, 6° up [60-EDO], 3/5- tone up
const flat7v11CDown = "" as Uni            // U+E35B   Flat 7:11C-down, 6° down [60-EDO], 3/5- tone down
const sharp5v11SUp = "" as Uni             // U+E35C   Sharp 5:11S-up
const flat5v11SDown = "" as Uni            // U+E35D   Flat 5:11S-down
const doubleSharp5v11SDown = "" as Uni     // U+E35E   Double sharp 5:11S-down
const doubleFlat5v11SUp = "" as Uni        // U+E35F   Double flat 5:11S-up
const doubleSharp7v11CDown = "" as Uni     // U+E360   Double sharp 7:11C-down, 9° up [60-EDO], 9/10-tone up
const doubleFlat7v11CUp = "" as Uni        // U+E361   Double flat 7:11C-up, 9° down [60-EDO], 9/10-tone down
const doubleSharp55CDown = "" as Uni       // U+E362   Double sharp 55C-down, 13° up [96-EDO], 13/16-tone up
const doubleFlat55CUp = "" as Uni          // U+E363   Double flat 55C-up, 13° down [96-EDO], 13/16-tone down
const doubleSharp17CDown = "" as Uni       // U+E364   Double sharp 17C-down
const doubleFlat17CUp = "" as Uni          // U+E365   Double flat 17C-up
const doubleSharp7v11kDown = "" as Uni     // U+E366   Double sharp 7:11k-down
const doubleFlat7v11kUp = "" as Uni        // U+E367   Double flat 7:11k-up

const _23CUp = "" as Uni                   // U+E370   23 comma up, (23C), 2° up [96-EDO], 1/8-tone up
const _23CDown = "" as Uni                 // U+E371   23 comma down, 2° down [96-EDO], 1/8-tone down
const _5v19CUp = "" as Uni                 // U+E372   5:19 comma up, (5:19C, 5C plus 19s), 1/20-tone up
const _5v19CDown = "" as Uni               // U+E373   5:19 comma down, 1/20-tone down
const _5v23SUp = "" as Uni                 // U+E374   5:23 small diesis up, (5:23S, 5C plus 23C), 2° up [60-EDO], 1/5-tone up
const _5v23SDown = "" as Uni               // U+E375   5:23 small diesis down, 2° down [60-EDO], 1/5-tone down
const sharp5v23SDown = "" as Uni           // U+E376   Sharp 5:23S-down, 3° up [60-EDO], 3/10-tone up
const flat5v23SUp = "" as Uni              // U+E377   Flat 5:23S-up, 3° down [60-EDO], 3/10-tone down
const sharp5v19CDown = "" as Uni           // U+E378   Sharp 5:19C-down, 9/20-tone up
const flat5v19CUp = "" as Uni              // U+E379   Flat 5:19C-up, 9/20-tone down
const sharp23CDown = "" as Uni             // U+E37A   Sharp 23C-down, 6° up [96-EDO], 3/8-tone up
const flat23CUp = "" as Uni                // U+E37B   Flat 23C-up, 6° down [96-EDO], 3/8-tone down
const sharp23CUp = "" as Uni               // U+E37C   Sharp 23C-up, 10° up [96-EDO], 5/8-tone up
const flat23CDown = "" as Uni              // U+E37D   Flat 23C-down, 10° down [96-EDO], 5/8-tone down
const sharp5v19CUp = "" as Uni             // U+E37E   Sharp 5:19C-up, 11/20-tone up
const flat5v19CDown = "" as Uni            // U+E37F   Flat 5:19C-down, 11/20-tone down
const sharp5v23SUp = "" as Uni             // U+E380   Sharp 5:23S-up, 7° up [60-EDO], 7/10-tone up
const flat5v23SDown = "" as Uni            // U+E381   Flat 5:23S-down, 7° down [60-EDO], 7/10-tone down
const doubleSharp5v23SDown = "" as Uni     // U+E382   Double sharp 5:23S-down, 8° up [60-EDO], 4/5-tone up
const doubleFlat5v23SUp = "" as Uni        // U+E383   Double flat 5:23S-up, 8° down [60-EDO], 4/5-tone down
const doubleSharp5v19CDown = "" as Uni     // U+E384   Double sharp 5:19C-down, 19/20-tone up
const doubleFlat5v19CUp = "" as Uni        // U+E385   Double flat 5:19C-up, 19/20-tone down
const doubleSharp23CDown = "" as Uni       // U+E386   Double sharp 23C-down, 14°up [96-EDO], 7/8-tone up
const doubleFlat23CUp = "" as Uni          // U+E387   Double flat 23C-up, 14° down [96-EDO], 7/8-tone down

const _19sUp = "" as Uni                   // U+E390   19 schisma up, (19s)
const _19sDown = "" as Uni                 // U+E391   19 schisma down
const _17kUp = "" as Uni                   // U+E392   17 kleisma up, (17k)
const _17kDown = "" as Uni                 // U+E393   17 kleisma down
const _143CUp = "" as Uni                  // U+E394   143 comma up, (143C, 13L less 11M)
const _143CDown = "" as Uni                // U+E395   143 comma down
const _11v49CUp = "" as Uni                // U+E396   11:49 comma up, (11:49C, 11M less 49S)
const _11v49CDown = "" as Uni              // U+E397   11:49 comma down
const _19CUp = "" as Uni                   // U+E398   19 comma up, (19C)
const _19CDown = "" as Uni                 // U+E399   19 comma down
const _7v19CUp = "" as Uni                 // U+E39A   7:19 comma up, (7:19C, 7C less 19s)
const _7v19CDown = "" as Uni               // U+E39B   7:19 comma down
const _49SUp = "" as Uni                   // U+E39C   49 small diesis up, (49S, ~31S)
const _49SDown = "" as Uni                 // U+E39D   49 small diesis down
const _23SUp = "" as Uni                   // U+E39E   23 small diesis up, (23S)
const _23SDown = "" as Uni                 // U+E39F   23 small diesis down
const _5v13MUp = "" as Uni                 // U+E3A0   5:13 medium diesis up, (5:13M, ~37M, 5C plus 13C)
const _5v13MDown = "" as Uni               // U+E3A1   5:13 medium diesis down
const _11v19MUp = "" as Uni                // U+E3A2   11:19 medium diesis up, (11:19M, 11M plus 19s)
const _11v19MDown = "" as Uni              // U+E3A3   11:19 medium diesis down
const _49MUp = "" as Uni                   // U+E3A4   49 medium diesis up, (49M, ~31M, 7C plus 7C)
const _49MDown = "" as Uni                 // U+E3A5   49 medium diesis down
const _5v49MUp = "" as Uni                 // U+E3A6   5:49 medium diesis up, (5:49M, half apotome)
const _5v49MDown = "" as Uni               // U+E3A7   5:49 medium diesis down
const _49LUp = "" as Uni                   // U+E3A8   49 large diesis up, (49L, ~31L, apotome less 49M)
const _49LDown = "" as Uni                 // U+E3A9   49 large diesis down
const _11v19LUp = "" as Uni                // U+E3AA   11:19 large diesis up, (11:19L, apotome less 11:19M)
const _11v19LDown = "" as Uni              // U+E3AB   11:19 large diesis down
const _5v13LUp = "" as Uni                 // U+E3AC   5:13 large diesis up, (5:13L, ~37L, apotome less 5:13M)
const _5v13LDown = "" as Uni               // U+E3AD   5:13 large diesis down

const sharp23SDown = "" as Uni             // U+E3B0   Sharp 23S-down
const flat23SUp = "" as Uni                // U+E3B1   Flat 23S-up
const sharp49SDown = "" as Uni             // U+E3B2   Sharp 49S-down
const flat49SUp = "" as Uni                // U+E3B3   Flat 49S-up
const sharp7v19CDown = "" as Uni           // U+E3B4   Sharp 7:19C-down
const flat7v19CUp = "" as Uni              // U+E3B5   Flat 7:19C-up
const sharp19CDown = "" as Uni             // U+E3B6   Sharp 19C-down
const flat19CUp = "" as Uni                // U+E3B7   Flat 19C-up
const sharp11v49CDown = "" as Uni          // U+E3B8   Sharp 11:49C-down
const flat11v49CUp = "" as Uni             // U+E3B9   Flat 11:49C-up
const sharp143CDown = "" as Uni            // U+E3BA   Sharp 143C-down
const flat143CUp = "" as Uni               // U+E3BB   Flat 143C-up
const sharp17kDown = "" as Uni             // U+E3BC   Sharp 17k-down
const flat17kUp = "" as Uni                // U+E3BD   Flat 17k-up
const sharp19sDown = "" as Uni             // U+E3BE   Sharp 19s-down
const flat19sUp = "" as Uni                // U+E3BF   Flat 19s-up
const sharp19sUp = "" as Uni               // U+E3C0   Sharp 19s-up
const flat19sDown = "" as Uni              // U+E3C1   Flat 19s-down
const sharp17kUp = "" as Uni               // U+E3C2   Sharp 17k-up
const flat17kDown = "" as Uni              // U+E3C3   Flat 17k-down
const sharp143CUp = "" as Uni              // U+E3C4   Sharp 143C-up
const flat143CDown = "" as Uni             // U+E3C5   Flat 143C-down
const sharp11v49CUp = "" as Uni            // U+E3C6   Sharp 11:49C-up
const flat11v49CDown = "" as Uni           // U+E3C7   Flat 11:49C-down
const sharp19CUp = "" as Uni               // U+E3C8   Sharp 19C-up
const flat19CDown = "" as Uni              // U+E3C9   Flat 19C-down
const sharp7v19CUp = "" as Uni             // U+E3CA   Sharp 7:19C-up
const flat7v19CDown = "" as Uni            // U+E3CB   Flat 7:19C-down
const sharp49SUp = "" as Uni               // U+E3CC   Sharp 49S-up
const flat49SDown = "" as Uni              // U+E3CD   Flat 49S-down
const sharp23SUp = "" as Uni               // U+E3CE   Sharp 23S-up
const flat23SDown = "" as Uni              // U+E3CF   Flat 23S-down
const sharp5v13MUp = "" as Uni             // U+E3D0   Sharp 5:13M-up
const flat5v13MDown = "" as Uni            // U+E3D1   Flat 5:13M-down
const sharp11v19MUp = "" as Uni            // U+E3D2   Sharp 11:19M-up
const flat11v19MDown = "" as Uni           // U+E3D3   Flat 11:19M-down
const sharp49MUp = "" as Uni               // U+E3D4   Sharp 49M-up
const flat49MDown = "" as Uni              // U+E3D5   Flat 49M-down
const sharp5v49MUp = "" as Uni             // U+E3D6   Sharp 5:49M-up, (one and a half apotomes)
const flat5v49MDown = "" as Uni            // U+E3D7   Flat 5:49M-down
const sharp49LUp = "" as Uni               // U+E3D8   Sharp 49L-up
const flat49LDown = "" as Uni              // U+E3D9   Flat 49L-down
const sharp11v19LUp = "" as Uni            // U+E3DA   Sharp 11:19L-up
const flat11v19LDown = "" as Uni           // U+E3DB   Flat 11:19L-down
const sharp5v13LUp = "" as Uni             // U+E3DC   Sharp 5:13L-up
const flat5v13LDown = "" as Uni            // U+E3DD   Flat 5:13L-down
const doubleSharp23SDown = "" as Uni       // U+E3E0   Double sharp 23S-down
const doubleFlat23SUp = "" as Uni          // U+E3E1   Double flat 23S-up
const doubleSharp49SDown = "" as Uni       // U+E3E2   Double sharp 49S-down
const doubleFlat49SUp = "" as Uni          // U+E3E3   Double flat 49S-up
const doubleSharp7v19CDown = "" as Uni     // U+E3E4   Double sharp 7:19C-down
const doubleFlat7v19CUp = "" as Uni        // U+E3E5   Double flat 7:19C-up
const doubleSharp19CDown = "" as Uni       // U+E3E6   Double sharp 19C-down
const doubleFlat19CUp = "" as Uni          // U+E3E7   Double flat 19C-up
const doubleSharp11v49CDown = "" as Uni    // U+E3E8   Double sharp 11:49C-down
const doubleFlat11v49CUp = "" as Uni       // U+E3E9   Double flat 11:49C-up
const doubleSharp143CDown = "" as Uni      // U+E3EA   Double sharp 143C-down
const doubleFlat143CUp = "" as Uni         // U+E3EB   Double flat 143C-up
const doubleSharp17kDown = "" as Uni       // U+E3EC   Double sharp 17k-down
const doubleFlat17kUp = "" as Uni          // U+E3ED   Double flat 17k-up
const doubleSharp19sDown = "" as Uni       // U+E3EE   Double sharp 19s-down
const doubleFlat19sUp = "" as Uni          // U+E3EF   Double flat 19s-up

const shaftUp = "" as Uni                  // U+E3F0   Shaft up, (natural for use with only diacritics up)
const shaftDown = "" as Uni                // U+E3F1   Shaft down, (natural for use with only diacritics down)
const tickUp = "" as Uni                   // U+E3F2   Acute, 5 schisma up (5s), 2 cents up
const tickDown = "" as Uni                 // U+E3F3   Grave, 5 schisma down, 2 cents down

const wingUp = "" as Uni                   // U+E3F4   1 mina up, 5.7.13-schismina up, 0.42 cents up
const wingDown = "" as Uni                 // U+E3F5   1 mina down, 5.7.13-schismina down, 0.42 cents down
const birdUp = "" as Uni                   // U+E3F6   2 minas up, 65:77-schismina up, 0.83 cents up
const birdDown = "" as Uni                 // U+E3F7   2 minas down, 65:77-schismina down, 0.83 cents down

const hornUp = "" as Uni                   // U+E3F8   1 tina up, 7²⋅11⋅19/5-schismina up, 0.17 cents up
const hornDown = "" as Uni                 // U+E3F9   1 tina down, 7²⋅11⋅19/5-schismina down, 0.17 cents down
const wedgeUp = "" as Uni                  // U+E3FA   2 tinas up, 1/(7³⋅17)-schismina up, 0.30 cents up
const wedgeDown = "" as Uni                // U+E3FB   2 tinas down, 1/(7³⋅17)-schismina down, 0.30 cents down
const mWingUp = "" as Uni                  // U+E3FC   3 tinas up, 1 mina up, 1/(5⋅7⋅13)-schismina up, 0.42 cents up
const mWingDown = "" as Uni                // U+E3FD   3 tinas down, 1 mina down, 1/(5⋅7⋅13)-schismina down, 0.42 cents down
const hornwingUp = "" as Uni               // U+E3FE   4 tinas up, 5²⋅11²/7-schismina up, 0.57 cents up
const hornwingDown = "" as Uni             // U+E3FF   4 tinas down, 5²⋅11²/7-schismina down, 0.57 cents down
const wedgewingUp = "" as Uni              // U+E400   5 tinas up, 7⁴/25-schismina up, 0.72 cents up
const wedgewingDown = "" as Uni            // U+E401   5 tinas down, 7⁴/25-schismina down, 0.72 cents down
const mBirdUp = "" as Uni                  // U+E402   6 tinas up, 2 minas up, 65/77-schismina up, 0.83 cents up
const mBirdDown = "" as Uni                // U+E403   6 tinas down, 2 minas down, 65/77-schismina down, 0.83 cents down
const hornbirdUp = "" as Uni               // U+E404   7 tinas up, 7/(5²⋅17)-schismina up, 1.02 cents up
const hornbirdDown = "" as Uni             // U+E405   7 tinas down, 7/(5²⋅17)-schismina down, 1.02 cents down
const wedgebirdUp = "" as Uni              // U+E406   8 tinas up, 11⋅17/(5²⋅7)-schismina up, 1.14 cents up
const wedgebirdDown = "" as Uni            // U+E407   8 tinas down, 11⋅17/(5²⋅7)-schismina down, 1.14 cents down
const wingbirdUp = "" as Uni               // U+E408   9 tinas up, 1/(7²⋅11)-schismina up, 1.26 cents up
const wingbirdDown = "" as Uni             // U+E409   9 tinas down, 1/(7²⋅11)-schismina down, 1.26 cents down
const dotUp = "" as Uni                    // U+E40A   fractional tina up, 77/(5⋅37)-schismina up, 0.08 cents up
const dotDown = "" as Uni                  // U+E40B   fractional tina down, 77/(5⋅37)-schismina down, 0.08 cents down

const SAGITTAL_ACCIDENTAL_MAP: Partial<Record<Code, Unit>> = {
    [Code["|("]]: {unicode: _5v7kUp, width: W07},
    [Code["!("]]: {unicode: _5v7kDown, width: W07},
    [Code["/|"]]: {unicode: _5CUp, width: W07},
    [Code["\\!"]]: {unicode: _5CDown, width: W07},
    [Code["|)"]]: {unicode: _7CUp, width: W07},
    [Code["!)"]]: {unicode: _7CDown, width: W07},
    [Code["//|"]]: {unicode: _25SUp, width: W10},
    [Code["\\\\!"]]: {unicode: _25SDown, width: W10},
    [Code["/|)"]]: {unicode: _35MUp, width: W11},
    [Code["\\!)"]]: {unicode: _35MDown, width: W11},
    [Code["/|\\"]]: {unicode: _11MUp, width: W13},
    [Code["\\!/"]]: {unicode: _11MDown, width: W13},
    [Code["(|)"]]: {unicode: _11LUp, width: W13},
    [Code["(!)"]]: {unicode: _11LDown, width: W13},
    [Code["(|\\"]]: {unicode: _35LUp, width: W14},
    [Code["(!/"]]: {unicode: _35LDown, width: W14},

    [Code[")||("]]: {unicode: sharp25SDown},
    [Code[")!!("]]: {unicode: flat25SUp},
    [Code["||)"]]: {unicode: sharp7CDown},
    [Code["!!)"]]: {unicode: flat7CUp},
    [Code["||\\"]]: {unicode: sharp5CDown},
    [Code["!!/"]]: {unicode: flat5CUp},
    [Code["/||)"]]: {unicode: sharp5v7kDown},
    [Code["\\!!)"]]: {unicode: flat5v7kUp},
    [Code["/||\\"]]: {unicode: apotomeUp},
    [Code["\\!!/"]]: {unicode: apotomeDown},
    [Code["|||("]]: {unicode: sharp5v7kUp},
    [Code["!!!("]]: {unicode: flat5v7kDown},
    [Code["/|||"]]: {unicode: sharp5CUp},
    [Code["\\!!!"]]: {unicode: flat5CDown},
    [Code["|||)"]]: {unicode: sharp7CUp},
    [Code["!!!)"]]: {unicode: flat7CDown},
    [Code["//|||"]]: {unicode: sharp25SUp},
    [Code["\\\\!!!"]]: {unicode: flat25SDown},
    [Code["/|||)"]]: {unicode: sharp35MUp},
    [Code["\\!!!)"]]: {unicode: flat35MDown},
    [Code["/|||\\"]]: {unicode: sharp11MUp},
    [Code["\\!!!/"]]: {unicode: flat11MDown},
    [Code["(|||)"]]: {unicode: sharp11LUp},
    [Code["(!!!)"]]: {unicode: flat11LDown},
    [Code["(|||\\"]]: {unicode: sharp35LUp},
    [Code["(!!!/"]]: {unicode: flat35LDown},
    [Code[")X("]]: {unicode: doubleSharp25SDown},
    [Code[")Y("]]: {unicode: doubleFlat25SUp},
    [Code["X)"]]: {unicode: doubleSharp7CDown},
    [Code["Y)"]]: {unicode: doubleFlat7CUp},
    [Code["X\\"]]: {unicode: doubleSharp5CDown},
    [Code["Y/"]]: {unicode: doubleFlat5CUp},
    [Code["/X)"]]: {unicode: doubleSharp5v7kDown},
    [Code["\\Y)"]]: {unicode: doubleFlat5v7kUp},
    [Code["/X\\"]]: {unicode: doubleSharp},
    [Code["\\Y/"]]: {unicode: doubleFlat},

    [Code[")|("]]: {unicode: _7v11kUp},
    [Code[")!("]]: {unicode: _7v11kDown},
    [Code["~|("]]: {unicode: _17CUp},
    [Code["~!("]]: {unicode: _17CDown},
    [Code["|\\"]]: {unicode: _55CUp},
    [Code["!/"]]: {unicode: _55CDown},
    [Code["(|"]]: {unicode: _7v11CUp},
    [Code["(!"]]: {unicode: _7v11CDown},
    [Code["(|("]]: {unicode: _5v11SUp},
    [Code["(!("]]: {unicode: _5v11SDown},
    [Code["~||("]]: {unicode: sharp5v11SDown},
    [Code["~!!("]]: {unicode: flat5v11SUp},
    [Code[")||~"]]: {unicode: sharp7v11CDown},
    [Code[")!!~"]]: {unicode: flat7v11CUp},
    [Code["/||"]]: {unicode: sharp55CDown},
    [Code["\\!!"]]: {unicode: flat55CUp},
    [Code["(||("]]: {unicode: sharp17CDown},
    [Code["(!!("]]: {unicode: flat17CUp},
    [Code["//||"]]: {unicode: sharp7v11kDown},
    [Code["\\\\!!"]]: {unicode: flat7v11kUp},
    [Code[")|||("]]: {unicode: sharp7v11kUp},
    [Code[")!!!("]]: {unicode: flat7v11kDown},
    [Code["~|||("]]: {unicode: sharp17CUp},
    [Code["~!!!("]]: {unicode: flat17CDown},
    [Code["|||\\"]]: {unicode: sharp55CUp},
    [Code["!!!/"]]: {unicode: flat55CDown},
    [Code["(|||"]]: {unicode: sharp7v11CUp},
    [Code["(!!!"]]: {unicode: flat7v11CDown},
    [Code["(|||("]]: {unicode: sharp5v11SUp},
    [Code["(!!!("]]: {unicode: flat5v11SDown},
    [Code["~X("]]: {unicode: doubleSharp5v11SDown},
    [Code["~Y("]]: {unicode: doubleFlat5v11SUp},
    [Code[")X~"]]: {unicode: doubleSharp7v11CDown},
    [Code[")Y~"]]: {unicode: doubleFlat7v11CUp},
    [Code["/X"]]: {unicode: doubleSharp55CDown},
    [Code["\\Y"]]: {unicode: doubleFlat55CUp},
    [Code["(X("]]: {unicode: doubleSharp17CDown},
    [Code["(Y("]]: {unicode: doubleFlat17CUp},
    [Code["//X"]]: {unicode: doubleSharp7v11kDown},
    [Code["\\\\Y"]]: {unicode: doubleFlat7v11kUp},

    [Code["|~"]]: {unicode: _23CUp},
    [Code["!~"]]: {unicode: _23CDown},
    [Code[")/|"]]: {unicode: _5v19CUp},
    [Code[")\\!"]]: {unicode: _5v19CDown},
    [Code["/|~"]]: {unicode: _5v23SUp},
    [Code["\\!~"]]: {unicode: _5v23SDown},
    [Code["||~"]]: {unicode: sharp5v23SDown},
    [Code["!!~"]]: {unicode: flat5v23SUp},
    [Code[")||)"]]: {unicode: sharp5v19CDown},
    [Code[")!!)"]]: {unicode: flat5v19CUp},
    [Code["/||~"]]: {unicode: sharp23CDown},
    [Code["\\!!~"]]: {unicode: flat23CUp},
    [Code["|||~"]]: {unicode: sharp23CUp},
    [Code["!!!~"]]: {unicode: flat23CDown},
    [Code[")/|||"]]: {unicode: sharp5v19CUp},
    [Code[")\\!!!"]]: {unicode: flat5v19CDown},
    [Code["/|||~"]]: {unicode: sharp5v23SUp},
    [Code["\\!!!~"]]: {unicode: flat5v23SDown},
    [Code["X~"]]: {unicode: doubleSharp5v23SDown},
    [Code["Y~"]]: {unicode: doubleFlat5v23SUp},
    [Code[")X)"]]: {unicode: doubleSharp5v19CDown},
    [Code[")Y)"]]: {unicode: doubleFlat5v19CUp},
    [Code["/X~"]]: {unicode: doubleSharp23CDown},
    [Code["\\Y~"]]: {unicode: doubleFlat23CUp},

    [Code[")|"]]: {unicode: _19sUp},
    [Code[")!"]]: {unicode: _19sDown},
    [Code["~|"]]: {unicode: _17kUp},
    [Code["~!"]]: {unicode: _17kDown},
    [Code[")~|"]]: {unicode: _143CUp},
    [Code[")~!"]]: {unicode: _143CDown},
    [Code["~~|"]]: {unicode: _11v49CUp},
    [Code["~~!"]]: {unicode: _11v49CDown},
    [Code[")|~"]]: {unicode: _19CUp},
    [Code[")!~"]]: {unicode: _19CDown},
    [Code[")|)"]]: {unicode: _7v19CUp},
    [Code[")!)"]]: {unicode: _7v19CDown},
    [Code["~|)"]]: {unicode: _49SUp},
    [Code["~!)"]]: {unicode: _49SDown},
    [Code["~|\\"]]: {unicode: _23SUp},
    [Code["~!/"]]: {unicode: _23SDown},
    [Code[")//|"]]: {unicode: _5v13MUp},
    [Code[")\\\\!"]]: {unicode: _5v13MDown},
    [Code["(|~"]]: {unicode: _11v19MUp},
    [Code["(!~"]]: {unicode: _11v19MDown},
    [Code["(/|"]]: {unicode: _49MUp},
    [Code["(\\!"]]: {unicode: _49MDown},
    [Code[")/|\\"]]: {unicode: _5v49MUp},
    [Code[")\\!/"]]: {unicode: _5v49MDown},
    [Code["|\\)"]]: {unicode: _49LUp},
    [Code["!/)"]]: {unicode: _49LDown},
    [Code["|\\\\"]]: {unicode: _11v19LUp},
    [Code["!//"]]: {unicode: _11v19LDown},
    [Code[")|\\\\"]]: {unicode: _5v13LUp},
    [Code[")!//"]]: {unicode: _5v13LDown},

    [Code[")~||"]]: {unicode: sharp23SDown},
    [Code[")~!!"]]: {unicode: flat23SUp},
    [Code["~~||"]]: {unicode: sharp49SDown},
    [Code["~~!!"]]: {unicode: flat49SUp},
    [Code[")/||"]]: {unicode: sharp7v19CDown},
    [Code[")\\!!"]]: {unicode: flat7v19CUp},
    [Code["(||"]]: {unicode: sharp19CDown},
    [Code["(!!"]]: {unicode: flat19CUp},
    [Code["~||)"]]: {unicode: sharp11v49CDown},
    [Code["~!!)"]]: {unicode: flat11v49CUp},
    [Code["~||\\"]]: {unicode: sharp143CDown},
    [Code["~!!/"]]: {unicode: flat143CUp},
    [Code[")//||"]]: {unicode: sharp17kDown},
    [Code[")\\\\!!"]]: {unicode: flat17kUp},
    [Code["(||~"]]: {unicode: sharp19sDown},
    [Code["(!!~"]]: {unicode: flat19sUp},
    [Code[")|||"]]: {unicode: sharp19sUp},
    [Code[")!!!"]]: {unicode: flat19sDown},
    [Code["~|||"]]: {unicode: sharp17kUp},
    [Code["~!!!"]]: {unicode: flat17kDown},
    [Code[")~|||"]]: {unicode: sharp143CUp},
    [Code[")~!!!"]]: {unicode: flat143CDown},
    [Code["~~|||"]]: {unicode: sharp11v49CUp},
    [Code["~~!!!"]]: {unicode: flat11v49CDown},
    [Code[")|||~"]]: {unicode: sharp19CUp},
    [Code[")!!!~"]]: {unicode: flat19CDown},
    [Code[")|||)"]]: {unicode: sharp7v19CUp},
    [Code[")!!!)"]]: {unicode: flat7v19CDown},
    [Code["~|||)"]]: {unicode: sharp49SUp},
    [Code["~!!!)"]]: {unicode: flat49SDown},
    [Code["~|||\\"]]: {unicode: sharp23SUp},
    [Code["~!!!/"]]: {unicode: flat23SDown},
    [Code[")//|||"]]: {unicode: sharp5v13MUp},
    [Code[")\\\\!!!"]]: {unicode: flat5v13MDown},
    [Code["(|||~"]]: {unicode: sharp11v19MUp},
    [Code["(!!!~"]]: {unicode: flat11v19MDown},
    [Code["(/|||"]]: {unicode: sharp49MUp},
    [Code["(\\!!!"]]: {unicode: flat49MDown},
    [Code[")/|||\\"]]: {unicode: sharp5v49MUp},
    [Code[")\\!!!/"]]: {unicode: flat5v49MDown},
    [Code["|||\\)"]]: {unicode: sharp49LUp},
    [Code["!!!/)"]]: {unicode: flat49LDown},
    [Code["|||\\\\"]]: {unicode: sharp11v19LUp},
    [Code["!!!//"]]: {unicode: flat11v19LDown},
    [Code[")|||\\\\"]]: {unicode: sharp5v13LUp},
    [Code[")!!!//"]]: {unicode: flat5v13LDown},
    [Code[")~X"]]: {unicode: doubleSharp23SDown},
    [Code[")~Y"]]: {unicode: doubleFlat23SUp},
    [Code["~~X"]]: {unicode: doubleSharp49SDown},
    [Code["~~Y"]]: {unicode: doubleFlat49SUp},
    [Code[")/X"]]: {unicode: doubleSharp7v19CDown},
    [Code[")\\Y"]]: {unicode: doubleFlat7v19CUp},
    [Code["(X"]]: {unicode: doubleSharp19CDown},
    [Code["(Y"]]: {unicode: doubleFlat19CUp},
    [Code["~X)"]]: {unicode: doubleSharp11v49CDown},
    [Code["~Y)"]]: {unicode: doubleFlat11v49CUp},
    [Code["~X\\"]]: {unicode: doubleSharp143CDown},
    [Code["~Y/"]]: {unicode: doubleFlat143CUp},
    [Code[")//X"]]: {unicode: doubleSharp17kDown},
    [Code[")\\\\Y"]]: {unicode: doubleFlat17kUp},
    [Code["(X~"]]: {unicode: doubleSharp19sDown},
    [Code["(Y~"]]: {unicode: doubleFlat19sUp},

    [Code["|"]]: {unicode: shaftUp},
    [Code["!"]]: {unicode: shaftDown},
    [Code["'"]]: {unicode: tickUp},
    [Code["."]]: {unicode: tickDown},

    [Code["`"]]: {unicode: wingUp},
    [Code[","]]: {unicode: wingDown},
    [Code["``"]]: {unicode: birdUp},
    [Code[",,"]]: {unicode: birdDown},

    [Code["@1"]]: {unicode: hornUp},
    [Code["l1"]]: {unicode: hornDown},
    [Code["@2"]]: {unicode: wedgeUp},
    [Code["l2"]]: {unicode: wedgeDown},
    [Code["@3"]]: {unicode: mWingUp},
    [Code["l3"]]: {unicode: mWingDown},
    [Code["@4"]]: {unicode: hornwingUp},
    [Code["l4"]]: {unicode: hornwingDown},
    [Code["@5"]]: {unicode: wedgewingUp},
    [Code["l5"]]: {unicode: wedgewingDown},
    [Code["@6"]]: {unicode: mBirdUp},
    [Code["l6"]]: {unicode: mBirdDown},
    [Code["@7"]]: {unicode: hornbirdUp},
    [Code["l7"]]: {unicode: hornbirdDown},
    [Code["@8"]]: {unicode: wedgebirdUp},
    [Code["l8"]]: {unicode: wedgebirdDown},
    [Code["@9"]]: {unicode: wingbirdUp},
    [Code["l9"]]: {unicode: wingbirdDown},
    [Code["@."]]: {unicode: dotUp},
    [Code["l."]]: {unicode: dotDown},
}

export {
    SAGITTAL_ACCIDENTAL_MAP,
    _5v7kUp,
    _5v7kDown,
    _5CUp,
    _5CDown,
    _7CUp,
    _7CDown,
    _25SUp,
    _25SDown,
    _35MUp,
    _35MDown,
    _11MUp,
    _11MDown,
    _11LUp,
    _11LDown,
    _35LUp,
    _35LDown,
    sharp25SDown,
    flat25SUp,
    sharp7CDown,
    flat7CUp,
    sharp5CDown,
    flat5CUp,
    sharp5v7kDown,
    flat5v7kUp,
    apotomeUp,
    apotomeDown,
    sharp5v7kUp,
    flat5v7kDown,
    sharp5CUp,
    flat5CDown,
    sharp7CUp,
    flat7CDown,
    sharp25SUp,
    flat25SDown,
    sharp35MUp,
    flat35MDown,
    sharp11MUp,
    flat11MDown,
    sharp11LUp,
    flat11LDown,
    sharp35LUp,
    flat35LDown,
    doubleSharp25SDown,
    doubleFlat25SUp,
    doubleSharp7CDown,
    doubleFlat7CUp,
    doubleSharp5CDown,
    doubleFlat5CUp,
    doubleSharp5v7kDown,
    doubleFlat5v7kUp,
    doubleSharp,
    doubleFlat,
    _7v11kUp,
    _7v11kDown,
    _17CUp,
    _17CDown,
    _55CUp,
    _55CDown,
    _7v11CUp,
    _7v11CDown,
    _5v11SUp,
    _5v11SDown,
    sharp5v11SDown,
    flat5v11SUp,
    sharp7v11CDown,
    flat7v11CUp,
    sharp55CDown,
    flat55CUp,
    sharp17CDown,
    flat17CUp,
    sharp7v11kDown,
    flat7v11kUp,
    sharp7v11kUp,
    flat7v11kDown,
    sharp17CUp,
    flat17CDown,
    sharp55CUp,
    flat55CDown,
    sharp7v11CUp,
    flat7v11CDown,
    sharp5v11SUp,
    flat5v11SDown,
    doubleSharp5v11SDown,
    doubleFlat5v11SUp,
    doubleSharp7v11CDown,
    doubleFlat7v11CUp,
    doubleSharp55CDown,
    doubleFlat55CUp,
    doubleSharp17CDown,
    doubleFlat17CUp,
    doubleSharp7v11kDown,
    doubleFlat7v11kUp,
    _23CUp,
    _23CDown,
    _5v19CUp,
    _5v19CDown,
    _5v23SUp,
    _5v23SDown,
    sharp5v23SDown,
    flat5v23SUp,
    sharp5v19CDown,
    flat5v19CUp,
    sharp23CDown,
    flat23CUp,
    sharp23CUp,
    flat23CDown,
    sharp5v19CUp,
    flat5v19CDown,
    sharp5v23SUp,
    flat5v23SDown,
    doubleSharp5v23SDown,
    doubleFlat5v23SUp,
    doubleSharp5v19CDown,
    doubleFlat5v19CUp,
    doubleSharp23CDown,
    doubleFlat23CUp,
    _19sUp,
    _19sDown,
    _17kUp,
    _17kDown,
    _143CUp,
    _143CDown,
    _11v49CUp,
    _11v49CDown,
    _19CUp,
    _19CDown,
    _7v19CUp,
    _7v19CDown,
    _49SUp,
    _49SDown,
    _23SUp,
    _23SDown,
    _5v13MUp,
    _5v13MDown,
    _11v19MUp,
    _11v19MDown,
    _49MUp,
    _49MDown,
    _5v49MUp,
    _5v49MDown,
    _49LUp,
    _49LDown,
    _11v19LUp,
    _11v19LDown,
    _5v13LUp,
    _5v13LDown,
    sharp23SDown,
    flat23SUp,
    sharp49SDown,
    flat49SUp,
    sharp7v19CDown,
    flat7v19CUp,
    sharp19CDown,
    flat19CUp,
    sharp11v49CDown,
    flat11v49CUp,
    sharp143CDown,
    flat143CUp,
    sharp17kDown,
    flat17kUp,
    sharp19sDown,
    flat19sUp,
    sharp19sUp,
    flat19sDown,
    sharp17kUp,
    flat17kDown,
    sharp143CUp,
    flat143CDown,
    sharp11v49CUp,
    flat11v49CDown,
    sharp19CUp,
    flat19CDown,
    sharp7v19CUp,
    flat7v19CDown,
    sharp49SUp,
    flat49SDown,
    sharp23SUp,
    flat23SDown,
    sharp5v13MUp,
    flat5v13MDown,
    sharp11v19MUp,
    flat11v19MDown,
    sharp49MUp,
    flat49MDown,
    sharp5v49MUp,
    flat5v49MDown,
    sharp49LUp,
    flat49LDown,
    sharp11v19LUp,
    flat11v19LDown,
    sharp5v13LUp,
    flat5v13LDown,
    doubleSharp23SDown,
    doubleFlat23SUp,
    doubleSharp49SDown,
    doubleFlat49SUp,
    doubleSharp7v19CDown,
    doubleFlat7v19CUp,
    doubleSharp19CDown,
    doubleFlat19CUp,
    doubleSharp11v49CDown,
    doubleFlat11v49CUp,
    doubleSharp143CDown,
    doubleFlat143CUp,
    doubleSharp17kDown,
    doubleFlat17kUp,
    doubleSharp19sDown,
    doubleFlat19sUp,
    shaftUp,
    shaftDown,
    tickUp,
    tickDown,
    wingUp,
    wingDown,
    birdUp,
    birdDown,
    hornUp,
    hornDown,
    wedgeUp,
    wedgeDown,
    mWingUp,
    mWingDown,
    hornwingUp,
    hornwingDown,
    wedgewingUp,
    wedgewingDown,
    mBirdUp,
    mBirdDown,
    hornbirdUp,
    hornbirdDown,
    wedgebirdUp,
    wedgebirdDown,
    wingbirdUp,
    wingbirdDown,
    dotUp,
    dotDown,
}
