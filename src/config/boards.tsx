import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';

const boards = {
    'Microcontroller Boards': [
        {
            name: translate({
                id: 'boards.microcontroller.pico.name',
                message: 'Raspberry Pi Pico',
            }),
            configName: 'Pico',
            pinout: '/controller-build/wiring#raspberry-pi-pico',
            website: 'https://www.raspberrypi.com/products/raspberry-pi-pico/',
            image: '/img/boards/Pico.jpg',
            supported: true,
            desc: () => (
                <p>
                    <Translate id="boards.microcontroller.pico.desc">
                        {'The Raspberry Pi Pico is a powerful, low-cost board based on the Raspberry Pi RP2040 microcontroller. This build is the reference implementation for GP2040-CE.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.microcontroller.pico_w.name',
                message: 'Raspberry Pi Pico W',
            }),
            configName: 'PicoW',
            pinout: '/controller-build/wiring#raspberry-pi-pico',
            website: 'https://www.raspberrypi.com/products/raspberry-pi-pico/',
            image: '/img/boards/PicoW.jpg',
            supported: true,
            desc: () => (
                <p>
                    <Translate id="boards.microcontroller.pico_w.desc">
                        {'The Raspberry Pi Pico W is a powerful, low-cost board based on the Raspberry Pi RP2040 microcontroller.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.microcontroller.kb2040.name',
                message: 'Adafruit KB2040',
            }),
            configName: 'KB2040',
            pinout: '/controller-build/wiring#adafruit-kb2040',
            website: 'https://learn.adafruit.com/adafruit-kb2040',
            image: '/img/boards/KB2040.jpg',
            supported: true,
            desc: () => (
                <p>
                    <Translate id="boards.microcontroller.kb2040.desc">
                        {'Another RP2040 board in the Pro Micro form factor, with 2 additional pins for USB data. This build is configured for DIY gamepad mods.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.microcontroller.liatris.name',
                message: 'Liatris',
            }),
            configName: 'SparkFunProMicro',
            pinout: '/controller-build/wiring#sparkfun-pro-micro---rp2040',
            website: 'https://splitkb.com/products/liatris',
            image: '/img/boards/Liatris.jpg',
            supported: true,
            desc: () => (
                <p>
                    <Translate
                        id="boards.microcontroller.liatris.desc"
                        values={{
                            SplitKB: (
                                <a href="https://splitkb.com/products/liatris" target="_blank" rel="noreferrer">
                                    SplitKB.com
                                </a>
                            ),
                        }}
                    >
                        {'Drop in RP2040 replacement for Pro Micro builds by {SplitKB}.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.microcontroller.seeed_xiao.name',
                message: 'Seeed XAIO RP2040',
            }),
            configName: 'SeeedXIAORP2040',
            pinout: '/controller-build/wiring#seeed-xiao-rp2040',
            website: 'https://wiki.seeedstudio.com/XIAO-RP2040/',
            image: '/img/boards/SeeedXIAORP2040.jpg',
            supported: true,
            desc: () => (
                <p>
                    <Translate id="boards.microcontroller.seeed_xiao.desc">
                        {'The Seeed Studio XIAO RP2040 is a small RP2040 board created by Seeed Studio.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.microcontroller.sparkfun_pm.name',
                message: 'SparkFun Pro Micro',
            }),
            configName: 'SparkFunProMicro',
            pinout: '/controller-build/wiring#sparkfun-pro-micro---rp2040',
            website: 'https://learn.sparkfun.com/tutorials/pro-micro-rp2040-hookup-guide',
            image: '/img/boards/SparkFunProMicro.jpg',
            supported: true,
            desc: () => (
                <p>
                    <Translate
                        id="boards.microcontroller.sparkfun_pm.desc"
                        values={{
                            Daemonbite: (
                                <a href="https://github.com/MickGyver/DaemonBite-Arcade-Encoder" target="_blank" rel="noreferrer">
                                    Daemonbite Arcade Encoder
                                </a>
                            ),
                        }}
                    >
                        {'An RP2040 board in the Pro Micro form factor. This build is a drop-in replacement for the {Daemonbite}.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.microcontroller.waveshare_zero.name',
                message: 'Waveshare RP2040-Zero',
            }),
            configName: 'WaveshareZero',
            pinout: '/controller-build/wiring#waveshare-rp2040-zero',
            website: 'https://www.waveshare.com/wiki/RP2040-Zero',
            image: '/img/boards/WaveshareZero.jpg',
            supported: true,
            desc: () => (
                <p>
                    <Translate
                        id="boards.microcontroller.waveshare_zero.desc"
                        values={{
                            WaveshareLink: (
                                <a href="https://www.waveshare.com/rp2040-zero.htm" target="_blank" rel="noreferrer">
                                    Waveshare RP2040-Zero
                                </a>
                            ),
                        }}
                    >
                        {'The {WaveshareLink} is a small form factor board with castellated pins and USB-C, making this a popular choice for custom built PCBs without the need for SMT assembly.'}
                    </Translate>
                </p>
            ),
        },
    ],
    'Community Devices': [
        {
            name: translate({
                id: 'boards.community.arc.name',
                message: 'ARC Accessibility Controller',
            }),
            configName: 'ARCController',
            pinout: null,
            website: 'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Controllers/ARC%20Accessibility%20Controller',
            image: '/img/boards/ARCController.jpg',
            category: 'official',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.arc.desc"
                        values={{
                            TheTrain: (
                                <a href="https://github.com/TheTrainGoes" target="_blank" rel="noreferrer">
                                    TheTrain
                                </a>
                            ),
                        }}
                    >
                        {'The ARC Controller is an accessibility controller. This was designed by {TheTrain} taking some design ideas from {jfedor2} as well as the universal standards for accessibility controller connectors.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.flatbox_rev4.name',
                message: 'Flatbox Rev 4',
            }),
            configName: 'FlatboxRev4',
            pinout: null,
            website: 'https://github.com/jfedor2/flatbox/tree/master/hardware-rev4',
            image: '/img/boards/FlatboxRev4.jpg',
            category: 'open',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.flatbox_rev4.desc"
                        values={{
                            jfedor2: (
                                <a href="https://github.com/jfedor2" target="_blank" rel="noreferrer">
                                    jfedor2
                                </a>
                            ),
                        }}
                    >
                        {'Stickless PCB designed by {jfedor2} using an embedded RP2040 chip.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.flatbox_rev5.name',
                message: 'Flatbox Rev 5',
            }),
            configName: 'FlatboxRev5',
            pinout: null,
            website: 'https://github.com/jfedor2/flatbox/tree/master/hardware-rev5',
            image: '/img/boards/FlatboxRev5.jpg',
            category: 'open',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.flatbox_rev5.desc"
                        values={{
                            jfedor2: (
                                <a href="https://github.com/jfedor2" target="_blank" rel="noreferrer">
                                    jfedor2
                                </a>
                            ),
                        }}
                    >
                        {'Stickless PCB designed by {jfedor2} using the Waveshare RP2040-Zero.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.flatbox_rev5_southpaw.name',
                message: 'Flatbox Rev 5 Southpaw',
            }),
            configName: 'FlatboxRev5Southpaw',
            pinout: null,
            website: 'https://github.com/SkylaHila/flatbox-southpaw',
            image: '/img/boards/FlatboxRev5Southpaw.jpg',
            category: 'open',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.flatbox_rev5_southpaw.desc"
                        values={{
                            jfedor2: (
                                <a href="https://github.com/jfedor2" target="_blank" rel="noreferrer">
                                    jfedor2
                                </a>
                            ),
                            SkylaHila: (
                                <a href="https://github.com/SkylaHila" target="_blank" rel="noreferrer">
                                    SkylaHila
                                </a>
                            ),
                        }}
                    >
                        {'Mirrored version of the Flatbox Rev 5 by {SkylaHila}. Based on the Flatbox Rev 5 by {jfedor2}.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.flatbox_rev5_rgb.name',
                message: 'Flatbox Rev 5 RGB',
            }),
            configName: 'FlatboxRev5RGB',
            pinout: null,
            website: 'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Controllers/Flatbox%20Rev%205%20RGB',
            image: '/img/boards/FlatboxRev5RGB.jpg',
            category: 'open',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.flatbox_rev5_rgb.desc"
                        values={{
                            jfedor2: (
                                <a href="https://github.com/jfedor2" target="_blank" rel="noreferrer">
                                    jfedor2
                                </a>
                            ),
                            TheTrain: (
                                <a href="https://github.com/TheTrainGoes" target="_blank" rel="noreferrer">
                                    TheTrain
                                </a>
                            ),
                        }}
                    >
                        {'Stickless PCB designed by {jfedor2} and {TheTrain} using the Waveshare RP2040-Zero.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.flatbox_rev5_passthrough.name',
                message: 'Flatbox Rev 5 USB Passthrough',
            }),
            configName: 'FlatboxRev5USBPassthrough',
            pinout: null,
            website: 'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Controllers/Flatbox%20Rev%205%20Passthrough',
            image: '/img/boards/FlatboxRev5USBPassthrough.jpg',
            category: 'open',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.flatbox_rev5_passthrough.desc"
                        values={{
                            jfedor2: (
                                <a href="https://github.com/jfedor2" target="_blank" rel="noreferrer">
                                    jfedor2
                                </a>
                            ),
                            TheTrain: (
                                <a href="https://github.com/TheTrainGoes" target="_blank" rel="noreferrer">
                                    TheTrain
                                </a>
                            ),
                        }}
                    >
                        {'Stickless PCB designed by {jfedor2} and {TheTrain} using the Waveshare RP2040-Zero.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.keyboard_converter.name',
                message: 'GP2040-CE Keyboard Converter',
            }),
            configName: 'KeyboardConverter',
            pinout: null,
            website: 'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/Supported%20Boards/GP2040%20Keyboard%20Converter/Waveshare%20Zero-PCB',
            image: '/img/boards/KeyboardConverter.jpg',
            category: 'open',
            desc: () => (
                <p>
                    <Translate id="boards.community.keyboard_converter.desc">
                        {'The GP2040-CE Keyboard Converter Case is designed to be a USB Host Device for the use of a keyboard with the GP2040-CE project.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.granola.name',
                message: 'Granola Summit',
            }),
            configName: 'Granola',
            pinout: null,
            website: 'https://granola.games/collections/controllers',
            image: '/img/boards/Granola.jpg',
            category: 'open',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.granola.desc"
                        values={{
                            granola: (
                                <a href="https://granola.games/" target="_blank" rel="noreferrer">
                                    Granola Summit
                                </a>
                            ),
                            repo: (
                                <a href="https://github.com/michaelswitzer/granola-summit" target="_blank" rel="noreferrer">
                                    here
                                </a>
                            ),
                        }}
                    >
                        {'Configuration for the {granola}. PCB and design files can be found {repo}.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.haute42.name',
                message: 'Haute42 Series',
            }),
            configName: 'Haute42COSMOX',
            pinout: null,
            website: 'https://haute42.com/',
            image: '/img/boards/Haute42.jpg',
            category: 'closed',
            desc: () => (
                <p>
                    <Translate id="boards.community.haute42.desc">
                        {'Configuration for the Haute42 Series. The Haute42 products are all compatible with the same configuration file. These products include the Haute42 Pad M Series, T Series, G Series, and mini.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.hautepad_m_lite.name',
                message: 'HautePad M Lite',
            }),
            configName: 'Haute42COSMOXMLite',
            pinout: null,
            website: 'https://cosmoxgaming.com/m-lite/',
            image: '/img/boards/Haute42COSMOXMLite.jpg',
            category: 'closed',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.hautepad_m_lite.desc"
                        values={{
                            site: (
                                <a href="https://cosmoxgaming.com/m-lite/" target="_blank" rel="noreferrer">
                                    HautePad M Lite
                                </a>
                            ),
                        }}
                    >
                        {'Configuration for the {site}. The HautePad M Lite product contains special case RGB code specific to the M-Lite. The firmware uf2 will automatically set the case rgbs and mode to enable full LEDs.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.hautepad_m_ultra.name',
                message: 'HautePad M Ultra',
            }),
            configName: 'Haute42COSMOXMUltra',
            pinout: null,
            website: 'https://cosmoxgaming.com/m-ultra/',
            image: '/img/boards/Haute42COSMOXMUltra.jpg',
            category: 'closed',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.hautepad_m_ultra.desc"
                        values={{
                            site: (
                                <a href="https://cosmoxgaming.com/m-ultra/" target="_blank" rel="noreferrer">
                                    HautePad M Ultra
                                </a>
                            ),
                        }}
                    >
                        {'Configuration for the {site}. The HautePad M Ultra product contains special case RGB code specific to the M Ultra. The firmware uf2 will automatically set the case rgbs and mode to enable full LEDs.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.hautepad_x_analog.name',
                message: 'HautePad X (Analog Configuration)',
            }),
            configName: 'Haute42COSMOXXAnalog',
            pinout: null,
            website: 'https://cosmoxgaming.com/x/',
            image: '/img/boards/Haute42COSMOXXAnalog.jpg',
            category: 'closed',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.hautepad_x_analog.desc"
                        values={{
                            site: (
                                <a href="https://cosmoxgaming.com/x/" target="_blank" rel="noreferrer">
                                    HautePad X Series in Analog Configuration
                                </a>
                            ),
                        }}
                    >
                        {'Configuration for the {site}. The HautePad X Series with the analog attachment requires a special configuration file to work immediately.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.mavercade_rev1.name',
                message: 'Mavercade Rev1',
            }),
            configName: 'MavercadeRev1',
            pinout: null,
            website: 'https://mavercade.com/',
            image: '/img/boards/MavercadeRev1.jpg',
            category: 'closed',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.mavercade_rev1.desc"
                        values={{
                            site: (
                                <a href="https://mavercade.com/" target="_blank" rel="noreferrer">
                                    Mavercade Rev1
                                </a>
                            ),
                        }}
                    >
                        {'Configuration for the {site}. These revisions use a Waveshare RP2040-Zero board.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.mavercade_rev2.name',
                message: 'Mavercade Rev2',
            }),
            configName: 'MavercadeRev2',
            pinout: null,
            website: 'https://mavercade.com/',
            image: '/img/boards/MavercadeRev2.jpg',
            category: 'closed',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.mavercade_rev2.desc"
                        values={{
                            site: (
                                <a href="https://mavercade.com/" target="_blank" rel="noreferrer">
                                    Mavercade Rev2
                                </a>
                            ),
                        }}
                    >
                        {'Configuration for the {site}. These revisions use a Waveshare RP2040-Zero board.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.mistercade_v2.name',
                message: 'MiSTercadeV2',
            }),
            configName: 'MiSTercadeV2',
            pinout: null,
            website: 'https://github.com/misteraddons/MiSTercadeV1',
            image: '/img/boards/MistercadeV2.jpg',
            category: 'closed',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.mistercade_v2.desc"
                        values={{
                            site: (
                                <a href="https://misteraddons.com/products/mistercade-v2-kit-mister-fpga-jamma-arcade-kit" target="_blank" rel="noreferrer">
                                    Mistercade V2
                                </a>
                            ),
                        }}
                    >
                        {'Configuration for the {site}. MiSTercade is the original JAMMA extension for MiSTer FPGA.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.opencore0.name',
                message: 'Open Core0',
            }),
            configName: 'OpenCore0',
            pinout: null,
            website: 'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Controllers/Open_Core0',
            image: '/img/boards/OpenCore0.jpg',
            category: 'official',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.opencore0.desc"
                        values={{
                            TheTrain: (
                                <a href="https://github.com/TheTrainGoes" target="_blank" rel="noreferrer">
                                    TheTrain
                                </a>
                            ),
                        }}
                    >
                        {'Open source stickless controller designed by {TheTrain}.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.opencore0_wasd.name',
                message: 'Open Core0 WASD',
            }),
            configName: 'OpenCore0WASD',
            pinout: null,
            website: 'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Controllers/Open_Core0%20WASD',
            image: '/img/boards/OpenCore0WASD.jpg',
            category: 'official',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.opencore0_wasd.desc"
                        values={{
                            TheTrain: (
                                <a href="https://github.com/TheTrainGoes" target="_blank" rel="noreferrer">
                                    TheTrain
                                </a>
                            ),
                        }}
                    >
                        {'Open source stickless WASD controller designed by {TheTrain}.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.osumgp.name',
                message: 'OSUMGP-RP2040',
            }),
            configName: 'OSUMGP-RP2040',
            pinout: null,
            website: 'https://github.com/NickGuyver/OSUMGP-RP2040',
            image: '/img/boards/OSUMGP-RP2040.jpg',
            category: 'open',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.osumgp.desc"
                        values={{
                            NickGuyver: (
                                <a href="https://github.com/NickGuyver/OSUMGP-RP2040" target="_blank" rel="noreferrer">
                                    NickGuyver
                                </a>
                            ),
                        }}
                    >
                        {'OSUMGP-RP2040: Open Source Universal Modern Game Pad - RP2040 Edition by {NickGuyver}.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.pico_fighting.name',
                message: 'Pico Fighting Board',
            }),
            configName: 'PicoFightingBoard',
            pinout: null,
            website: 'https://github.com/FeralAI/PicoFightingBoard',
            image: '/img/boards/PicoFightingBoard.jpg',
            category: 'open',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.pico_fighting.desc"
                        values={{
                            FeralAI: (
                                <a href="https://github.com/FeralAI" target="_blank" rel="noreferrer">
                                    FeralAI
                                </a>
                            ),
                        }}
                    >
                        {'Arcade encoder board designed by {FeralAI} using a Raspberry Pi Pico or pin-equivalent RP2040 board.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.pxp_gamepad.name',
                message: 'PXP-Gamepad',
            }),
            configName: 'PXPGamepad',
            pinout: null,
            website: 'https://github.com/MegaBitmap/PXP-Gamepad',
            image: '/img/boards/PXPGamepad.png',
            category: 'open',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.pxp_gamepad.desc"
                        values={{
                            MegaBitmap: (
                                <a href="https://github.com/MegaBitmap/PXP-Gamepad" target="_blank" rel="noreferrer">
                                    MegaBitmap
                                </a>
                            ),
                        }}
                    >
                        {'DIY universal controller pocket gamepad by {MegaBitmap} using an RP2040-Zero MCU soldered onto a custom PCB.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.reflex_encode_v1_2.name',
                message: 'Reflex Encode v1.2',
            }),
            configName: 'ReflexEncodeV1.2',
            pinout: null,
            website: 'https://github.com/misteraddons/ReflexFightingBoard',
            image: '/img/boards/ReflexEncode_v1.2.jpg',
            category: 'open',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.reflex_encode_v1_2.desc"
                        values={{
                            MiSTerAddons: (
                                <a href="https://github.com/misteraddons" target="_blank" rel="noreferrer">
                                    MiSTerAddons
                                </a>
                            ),
                        }}
                    >
                        {'Arcade encoder board designed and sold by {MiSTerAddons} using an embedded RP2040 chip.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.reflex_encode_v2.name',
                message: 'Reflex Encode v2.0',
            }),
            configName: 'ReflexEncodeV2.0',
            pinout: null,
            website: 'https://github.com/misteraddons/ReflexFightingBoard',
            image: '/img/boards/ReflexEncode_v2.0.jpg',
            category: 'open',
            desc: () => (
                <p>
                    <Translate id="boards.community.reflex_encode_v2.desc">
                        {'Arcade encoder board designed and sold by MiSTerAddons using an embedded RP2040 chip.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.reflex_ctrl_genesis6.name',
                message: 'Reflex CTRL Genesis 6',
            }),
            configName: 'ReflexCtrlGenesis6',
            pinout: null,
            website: 'https://github.com/misteraddons/Reflex-CTRL',
            image: '/img/boards/ReflexCTRLGenesis6.png',
            category: 'open',
            desc: () => (
                <p>
                    <Translate id="boards.community.reflex_ctrl_genesis6.desc">
                        {'Reflex Board Open source PCB for Sega Genesis 6 button Controller replacement PCBs designed and sold by MiSTerAddons using an embedded RP2040 chip.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.reflex_ctrl_nes.name',
                message: 'Reflex CTRL NES',
            }),
            configName: 'ReflexCtrlNES',
            pinout: null,
            website: 'https://github.com/misteraddons/Reflex-CTRL',
            image: '/img/boards/ReflexCTRLNES.png',
            category: 'open',
            desc: () => (
                <p>
                    <Translate id="boards.community.reflex_ctrl_nes.desc">
                        {'Reflex Board Open source PCB for NES Controller replacement PCBs designed and sold by MiSTerAddons using an embedded RP2040 chip.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.reflex_ctrl_snes.name',
                message: 'Reflex CTRL SNES',
            }),
            configName: 'ReflexCtrlSNES',
            pinout: null,
            website: 'https://github.com/misteraddons/Reflex-CTRL',
            image: '/img/boards/ReflexCTRLSNES.png',
            category: 'open',
            desc: () => (
                <p>
                    <Translate id="boards.community.reflex_ctrl_snes.desc">
                        {'Reflex Board Open source PCB for SNES Controller replacement PCBs designed and sold by MiSTerAddons using an embedded RP2040 chip.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.reflex_ctrl_saturn.name',
                message: 'Reflex CTRL Saturn',
            }),
            configName: 'ReflexCtrlSaturn',
            pinout: null,
            website: 'https://github.com/misteraddons/Reflex-CTRL',
            image: '/img/boards/ReflexCTRLSaturn.png',
            category: 'open',
            desc: () => (
                <p>
                    <Translate id="boards.community.reflex_ctrl_saturn.desc">
                        {'Reflex Board Open source PCB for Sega Saturn Controller replacement PCBs designed and sold by MiSTerAddons using an embedded RP2040 chip.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.reflex_ctrl_vb.name',
                message: 'Reflex CTRL Virtual Boy',
            }),
            configName: 'ReflexCtrlVB',
            pinout: null,
            website: 'https://github.com/misteraddons/Reflex-CTRL',
            image: '/img/boards/ReflexCTRLVB.png',
            category: 'open',
            desc: () => (
                <p>
                    <Translate id="boards.community.reflex_ctrl_vb.desc">
                        {'Reflex Board Open source PCB for Virtual Boy Controller replacement PCBs designed and sold by MiSTerAddons using an embedded RP2040 chip.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.rp2040_advanced_breakout.name',
                message: 'RP2040 Advanced Breakout',
            }),
            configName: 'RP2040AdvancedBreakoutBoard',
            pinout: null,
            website: 'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Boards/RP2040%20Advanced%20Breakout%20Board/RP2040%20Advanced%20Breakout%20Board',
            image: '/img/boards/RP2040AdvancedBreakoutBoard.jpg',
            category: 'official',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.rp2040_advanced_breakout.desc"
                        values={{
                            TheTrain: (
                                <a href="https://github.com/TheTrainGoes" target="_blank" rel="noreferrer">
                                    TheTrain
                                </a>
                            ),
                        }}
                    >
                        {'Arcade encoder board designed by {TheTrain} using an embedded RP2040, and is the official board of the GP2040-CE project.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.rp2040_passthrough.name',
                message: 'RP2040 Advanced Breakout (USB Passthrough)',
            }),
            configName: 'RP2040AdvancedBreakoutBoardUSBPassthrough',
            pinout: null,
            website: 'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Boards/RP2040%20Advanced%20Breakout%20Board/RP2040%20Advanced%20Breakout%20Board%20-%20Passthrough',
            image: '/img/boards/RP2040AdvancedBreakoutBoardUSBPassthrough.jpg',
            category: 'official',
            desc: () => (
                <p>
                    <Translate id="boards.community.rp2040_passthrough.desc">
                        {'Official USB Passthrough Board of the Open Stick project. Updated version of the RP2040 Advanced Breakout Board with USB passthrough included on the board.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.rp2040_mini_breakout.name',
                message: 'RP2040 Mini Breakout Board',
            }),
            configName: 'RP2040MiniBreakoutBoard',
            pinout: null,
            website: 'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Boards/RP2040%20Mini%20Breakout%20Board/RP2040%20Mini%20Breakout%20Board',
            image: '/img/boards/RP2040MiniBreakoutBoard.jpg',
            category: 'open',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.rp2040_mini_breakout.desc"
                        values={{
                            TheTrain: (
                                <a href="https://github.com/TheTrainGoes" target="_blank" rel="noreferrer">
                                    TheTrain
                                </a>
                            ),
                        }}
                    >
                        {'A reduced-footprint spin off of the RP2040 Advanced Breakout Board designed by {TheTrain}.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.bentobox.name',
                message: 'ScrubTier BentoBox',
            }),
            configName: 'BentoBox',
            pinout: null,
            website: 'https://github.com/OpenStickCommunity/GP2040-CE/tree/main/configs/BentoBox',
            image: '/img/boards/BentoBox.jpg',
            category: 'closed',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.bentobox.desc"
                        values={{
                            ScrubTier: (
                                <a href="https://scrubtier.co.uk/" target="_blank" rel="noreferrer">
                                    ScrubTier BentoBox
                                </a>
                            ),
                        }}
                    >
                        {'Configuration for the {ScrubTier}.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.sgf_devices.name',
                message: 'SGF Devices',
            }),
            configName: 'SGFDevices',
            pinout: null,
            website: 'https://sgfdevices.com/collections/controllers',
            image: '/img/boards/SGFFaust.jpg',
            category: 'closed',
            desc: () => (
                <p>
                    <Translate id="boards.community.sgf_devices.desc">
                        {'The SGF stickless controllers are inspired by the open-source flatbox rev4 design by jfedor.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.stress.name',
                message: 'Stress',
            }),
            configName: 'Stress',
            pinout: null,
            website: 'https://github.com/GroooveBob/Stress',
            image: '/img/boards/Stress.jpg',
            category: 'open',
            desc: () => (
                <p>
                    <Translate
                        id="boards.community.stress.desc"
                        values={{
                            GroooveBob: (
                                <a href="https://github.com/GroooveBob" target="_blank" rel="noreferrer">
                                    GroooveBob
                                </a>
                            ),
                        }}
                    >
                        {'A small and portable PCB-as-a-controller designed by {GroooveBob} using the Waveshare RP-2040-Zero.'}
                    </Translate>
                </p>
            ),
        },
        {
            name: translate({
                id: 'boards.community.zero_rhythm.name',
                message: 'Zero Rhythm',
            }),
            configName: 'ZeroRhythm',
            pinout: null,
            website: 'https://github.com/OpenStickCommunity/Hardware/tree/main/Boards/GP2040-CE%20Official%20Controllers/Zero%20Rhythm',
            image: '/img/boards/Zero_Rhythm.jpg',
            category: 'official',
            desc: () => (
                <p>
                    <Translate id="boards.community.zero_rhythm.desc">
                        {'The Zero Rhythm is a controller for the Theatrhythm game on the Nintendo Switch. It allows you to play rhythm as well as dual stick games in a double WASD layout.'}
                    </Translate>
                </p>
            ),
        },
    ],
};

export default boards;
