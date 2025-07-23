# RC-500 RC0 ↔ Device Parameter Mapping

This document maps RC0 config sections/parameters to device UI names and explanations (from Parameters.md). Extra RC0 parameters not found in the device UI are noted.

---

| Config Section | RC0 Param | Device UI Name | Display Name | UI Section (Markdown) | Value Mapping/Notes |
|---------------|-------------|----------------|--------------|----------------------|---------------------|
| NAME          | C01–C12   | NAME           | Memory Name  | NAME                 | ASCII codes, concat |
| TRACK1/2      | Rev        | REVERSE        | Reverse       | TRACK 1, 2           | 0=OFF, 1=ON         |
| TRACK1/2      | PlyLvl     | LEVEL          | Track Level   | TRACK 1, 2           | 0–200               |
| TRACK1/2      | Pan        | PAN            | Stereo Pan    | TRACK 1, 2           | L50–CENTER–R50      |
| TRACK1/2      | One        | 1SHOT          | One Shot      | TRACK 1, 2           | 0=OFF, 1=ON         |
| TRACK1/2      | LoopFx     | LOOP FX        | Loop FX       | TRACK 1, 2           | 0=OFF, 1=ON         |
| TRACK1/2      | StrtMod    | START          | Start Mode    | TRACK 1, 2           | 0=IMMEDIATE, 1=FADE IN |
| TRACK1/2      | StpMod     | STOP           | Stop Mode     | TRACK 1, 2           | 0=IMMEDIATE, 1=FADE OUT, 2=LOOP END |
| TRACK1/2      | Measure    | MEASURE        | Measure Count | TRACK 1, 2           | AUTO, FREE, 1MEAS–  |
| TRACK1/2      | LoopSync   | LOOPS (LOOP SYNC) | Loop Sync     | TRACK 1, 2           | OFF, ON             |
| TRACK1/2      | TempoSync  | TEMPO.S (TEMPO SYNC) | Tempo Sync    | TRACK 1, 2           | OFF, ON             |
| TRACK1/2      | Input      | INPUT          | Input Select  | TRACK 1, 2           | ALL, MIC IN, INST IN, INST IN-A, INST IN-B, MIC/INST |
| TRACK1/2      | Output     | OUTPUT         | Output Route  | TRACK 1, 2           | ALL, OUT-A, OUT-B    |
| TRACK1/2      | MeasMod    |                 | Measure Mode  | TRACK 1, 2           | 0=Auto, 1=Manual    |
| TRACK1/2      | MeasLen    |                 | Measure Length| TRACK 1, 2           | Integer             |
| TRACK1/2      | MeasBtLp   |                 | Beat Loop     | TRACK 1, 2           | 0=Off, 1=On         |
| TRACK1/2      | RecTmp     |                 | Record Tempo  | TRACK 1, 2           | BPM × 10 (e.g., 1200 = 120.0 BPM) |
| TRACK1/2      | WavStat    |                 | Wave Status   | TRACK 1, 2           | 0=Empty, 1=Recorded |
| TRACK1/2      | WavLen     |                 | Wave Length   | TRACK 1, 2           | Samples/frames      |
| MASTER        | Tempo          |                     | Tempo                | REC                  | BPM × 10 (e.g., 1200 = 120.0 BPM) |
| MASTER        | DubMode        | DUB MODE            | Dub Mode             | REC                  | OVERDUB, REPLACE |
| MASTER        | RecAction      | REC ACTION          | Rec Action           | REC                  | REC→DUB, REC→PLAY |
| MASTER        | RecQuantize    | QUANTIZE            | Quantize             | REC                  | OFF, MEASURE |
| MASTER        | AutoRec        | AUTO REC            | Auto Rec             | REC                  | OFF, ON |
| MASTER        | AutoRecSens    | A.REC SENS          | Auto Rec Sensitivity | REC                  | 1–100 |
| MASTER        | AutoRecSrc     | A.REC SRC           | Auto Rec Source      | REC                  | ALL, MIC IN, INST, INST-A, INST-B |
| MASTER        | PlayMode       | PLAY MODE           | Play Mode            | PLAY                 | MULTI, SINGLE |
| MASTER        | SinglPlayeChange| SINGL CHNGE        | Single Change        | PLAY                 | LOOP END |
| MASTER        | FadeTime       | FADE TIME           | Fade Time            | PLAY                 | 𝅘𝅥𝅯, ♪, ♩, 𝅗𝅥, 1MEAS–2MEAS–64MEAS |
| MASTER        | AllStart       | ALL START           | All Start            | PLAY                 | ALL, TRACK1, TRACK2 |
| MASTER        | TrackChain     | TRK CHAIN           | Track Chain          | PLAY                 | PARALLEL, SERIES |
| MASTER        | CurrentTrack   |                    | Current Track (RC0 only) | PLAY                 | 0=TRK1, 1=TRK2 (RC0 only) |
| MASTER        | AllTrackSel    |                    | All Track Select (RC0 only) | PLAY                 | 0=Off, 1=On (RC0 only) |
| MASTER        | Level          | LEVEL               | Level                | PLAY                 | 0–100–200 |
| MASTER        | LpMod          | LOOP MODE           | Loop Mode            | PLAY                 | OFF, ON |
| MASTER        | LpLen          | LOOP LENGTH         | Loop Length          | PLAY                 | AUTO, 1–25362 |
| MASTER        | TrkMod          | TRACK MODE          | Track Mode           | PLAY                 | OFF, ON |
| MASTER        | Sync       | SYNC            | Sync          | PLAY                 | 0=OFF, 1=ON         |
| LOOPFX        | Sw         | LOOP FX         | Loop FX On/Off | LOOP FX              | 0=OFF, 1=ON         |
| LOOPFX        | FxType     | TYPE            | FX Type        | LOOP FX              | SCATTER1–4, REPEAT1–3, SHIFT1–2, VINYL FLICK |
| LOOPFX        | RepeatLength| REPT LEN        | Repeat Length  | LOOP FX              | THRU, 𝅝, ♩, ♪, 𝅘𝅥𝅯, 𝅘𝅥𝅰 (see doc) |
| LOOPFX        | ShiftShift  | SHIFT           | Shift Length   | LOOP FX              | THRU, 𝅘𝅥𝅯, ♪, ♩, 𝅗𝅥, 𝅝 (see doc) |
| LOOPFX        | ScatterLength| SCAT LEN        | Scatter Length | LOOP FX              | THRU, 𝅗𝅥, ♩, ♪, 𝅘𝅥𝅯 (see doc) |
| LOOPFX        | VinylFlickFlick| FLICK         | Vinyl Flick    | LOOP FX              | 0–100               |
| RHYTHM        | Level       | LEVEL           | Rhythm Level    | RHYTHM               | 0–200               |
| RHYTHM        | Reverb      | REVERB          | Rhythm Reverb   | RHYTHM               | 0–100               |
| RHYTHM        | Pattern     | PATTERN         | Rhythm Pattern  | RHYTHM               | See doc (pattern names) |
| RHYTHM        | Variation   | VARIATION       | Pattern Variation| RHYTHM               | A, B                |
| RHYTHM        | VariationChange| VAR.CHANGE    | Variation Change| RHYTHM               | MEASURE, LOOP END   |
| RHYTHM        | Kit         | KIT             | Drum Kit        | RHYTHM               | Studio, Live, Light, ... |
| RHYTHM        | Beat        | BEAT            | Rhythm Beat     | RHYTHM               | 2/4, 3/4, 4/4, ...  |
| RHYTHM        | Fill        | RHY FILL        | Rhythm Fill     | RHYTHM               | OFF, ON             |
| RHYTHM        | Part1–Part4 |                 | Rhythm Part 1–4 | RHYTHM               | 0=OFF, 1=ON         |
| RHYTHM        | RecCount    | REC COUNT       | Record Count-in | RHYTHM               | OFF, 1MEAS          |
| RHYTHM        | PlayCount   | PLAY COUNT      | Play Count-in   | RHYTHM               | OFF, 1MEAS          |
| RHYTHM        | Start       | START           | Rhythm Start    | RHYTHM               | IMMEDIATE, FADE IN  |
| RHYTHM        | Stop        | STOP            | Rhythm Stop     | RHYTHM               | IMMEDIATE, FADE OUT, LOOP END |
| RHYTHM        | ToneLow     | TONE LOW        | Rhythm Tone Low | RHYTHM               | –10–0–10            |
| RHYTHM        | ToneHigh    | TONE HIGH       | Rhythm Tone High| RHYTHM               | –10–0–10            |
| RHYTHM        | State       |                 | Rhythm State    | RHYTHM               | 0=Stopped, 1=Playing|
| CTL           | Pedal1     | PDL1 FUNC        | Pedal 1 Function | CTL                  | See doc (enum)      |
| CTL           | Pedal2     | PDL2 FUNC        | Pedal 2 Function | CTL                  | See doc (enum)      |
| CTL           | Pedal3     | PDL3 FUNC        | Pedal 3 Function | CTL                  | See doc (enum)      |
| CTL           | Ctl1       | CTL1 FUNC        | CTL1 Function    | CTL                  | See doc (enum)      |
| CTL           | Ctl2       | CTL2 FUNC        | CTL2 Function    | CTL                  | See doc (enum)      |
| CTL           | Exp        | EXP FUNC         | Expression Pedal | CTL                  | See doc (enum)      |
| ASSIGN1–8     | Sw         | ASSIGNx Sw        | Assign Switch    | ASSIGN1–8            | OFF, ON             |
| ASSIGN1–8     | Source     | ASSIGNx Source    | Assign Source    | ASSIGN1–8            | See doc (enum)      |
| ASSIGN1–8     | SourceMode | ASSIGNx SRC MODE  | Assign Source Mode| ASSIGN1–8            | MOMENT, TOGGLE      |
| ASSIGN1–8     | Target     | ASSIGNx Target    | Assign Target    | ASSIGN1–8            | See doc (enum)      |
| ASSIGN1–8     | TargetMin  | ASSIGNx TargetMin | Assign Target Min| ASSIGN1–8            | Integer             |
| ASSIGN1–8     | TargetMax  | ASSIGNx TargetMax | Assign Target Max| ASSIGN1–8            | Integer             |

---

**Notes:**
- All config parameters found in Parameters.md are mapped. Extra RC0 parameters should be added as needed.
- Value mappings (enums, ranges) should be refined as more device details are found.
- This mapping is the basis for the visualizer’s lookup tables.
