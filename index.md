<p align="center">
  <a href="https://gp2040-ce.info">
    <img alt="GP2040-CE" src="https://raw.githubusercontent.com/OpenStickCommunity/Site/main/docs/assets/images/gp2040-ce-logo.png" />
  </a>
</p>

<p align="center">
  Multi-Platform Gamepad Firmware for RP2040
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/OpenStickCommunity/GP2040-CE" />
  <img src="https://img.shields.io/github/actions/workflow/status/OpenStickCommunity/GP2040-CE/cmake.yml" />
  <br />
  <img src="https://img.shields.io/badge/inputlag.science-0.86%20ms-blue" />
  <img src="https://img.shields.io/badge/MiSTer%20latency-0.765%20ms-blue" />
</p>

<p>
  GP2040-CE (Community Edition) is a gamepad firmware for the Raspberry Pi Pico and other boards based on the RP2040 microcontrollers that combines multi-platform compatibility, low latency and a rich feature set to provide endless customization possibilities without sacrificing performance.
</p>

<p>
  GP2040-CE is compatible with PC, PS3, PS4, PS5, Nintendo Switch, Xbox One, Steam Deck, MiSTer and Android.
</p>

## 相关链接

[下载页](https://gp2040-ce.info/downloads) | [安装指南](https://gp2040-ce.info/installation) | [接线教程](https://gp2040-ce.info/controller-build/wiring) | [使用说明](https://gp2040-ce.info/usage) | [常见问题](https://gp2040-ce.info/faq/faq-general) | [GitHub 仓库](https://github.com/OpenStickCommunity/GP2040-CE)

完整文档可前往 [https://gp2040-ce.info](https://gp2040-ce.info)。

---

## 功能特色

- 支持 13 种输入模式，包括 XInput、Nintendo Switch、PlayStation 4/5、Xbox One、D-Input 和键盘模式。
- 平均输入延迟低至 0.76 毫秒（XInput）以及 0.90 毫秒（PlayStation 5）。
- 多种 SOCD 清理模式：向上优先模式（又称 Stickless）、中立模式和次输入优先模式。
- 使用方向键输入进行左右摇杆模拟，同时支持专用的切换开关。
- 支持使用方向键加左/右摇杆的双向输入功能。
- 支持通过按键进行输入反转。
- [快速触发与 Turbo LED](https://gp2040-ce.info/add-ons/turbo)，并可自定义触发速度。
- 每个按键支持独立的 RGB LED 灯控。
- XInput 模式下支持 PWM 玩家指示灯。
- 多种 LED 配置文件支持。
- 支持 128x64 单色 I2C 显示屏，兼容 SSD1306、SH1106 和 SH1107。
- 可自定义开机画面，并通过 Web 配置轻松上传图片。
- 支持被动蜂鸣器扬声器（3V 或 5V）。
- [内置嵌入式 Web 配置器](https://gp2040-ce.info/web-configurator)，无需下载即可使用！

更多详情请访问 [GP2040-CE 使用说明](https://gp2040-ce.info/usage) 页面。

---

## 性能

输入延迟按照 [WydD 的 inputlag.science 网站](https://inputlag.science/controller/methodology)中的测试方法进行测试，固件默认轮询频率为 1000 Hz（1 毫秒）。如果您对测试有兴趣，或想进一步了解我们使用的设备，可以参考我们的测试说明文档 [这里](https://github.com/OpenStickCommunity/Site/blob/main/latency_testing/README.md)。

### 测试结果

| 版本      | 模式       | 轮询率   | 最小延迟 | 最大延迟 | 平均延迟 | 标准差   | 准时率    | %1 帧跳过 | %2 帧跳过 |
|-----------|------------|----------|----------|----------|----------|----------|-----------|-----------|-----------|
| v0.7.11   | XInput     | 1 ms     | 0.45 ms  | 1.28 ms  | 0.76 ms  | 0.24 ms  | 98.48%    | 1.52%     | 0%        |
| v0.7.11   | Switch     | 1 ms     | 0.41 ms  | 1.23 ms  | 0.72 ms  | 0.24 ms  | 98.53%    | 1.47%     | 0%        |
| v0.7.11   | HID USB    | 1 ms     | 0.41 ms  | 1.30 ms  | 0.72 ms  | 0.24 ms  | 98.53%    | 1.47%     | 0%        |
| v0.7.11   | PS3        | 1 ms     | 0.52 ms  | 1.46 ms  | 0.83 ms  | 0.24 ms  | 98.38%    | 1.62%     | 0%        |
| v0.7.11   | PS4        | 1 ms     | 0.55 ms  | 2.37 ms  | 0.90 ms  | 0.32 ms  | 98.19%    | 1.81%     | 0%        |
| v0.7.11   | PS5        | 1 ms     | 0.55 ms  | 2.37 ms  | 0.91 ms  | 0.33 ms  | 98.17%    | 1.83%     | 0%        |

完整测试结果请参考 [GP2040-CE v0.7.11 固件延迟测试结果](https://github.com/OpenStickCommunity/Site/raw/main/latency_testing/GP2040-CE_Firmware_Latency_Test_Results_v0.7.11.xlsx) 文件。

v0.7.10 的测试结果可在 [这里](https://github.com/OpenStickCommunity/Site/raw/main/latency_testing/GP2040-CE_Firmware_Latency_Test_Results_v0.7.10.xlsx) 获取。以往的测试结果均可在 `latency_testing` 文件夹中找到。

---

## 技术支持

如果您想讨论功能、报告问题或其他与 GP2040-CE 相关的内容，请通过以下方式获取支持：

- [创建 Issue](https://github.com/OpenStickCommunity/GP2040-CE/issues/new)。
- 加入 [OpenStick GP2040-CE Discord](https://discord.gg/k2pxhke7q8) 社区支持频道。

---

## 参与项目

想为 GP2040-CE 的改进贡献一份力量？有多种方式可以参与！

### 社区参与

如果您有一个很酷的新功能想法，或者想与开发者讨论一些技术细节，请加入 [OpenStick GP2040-CE Discord](https://discord.gg/k2pxhke7q8) 服务器，与我们活跃的社区一起交流！

### 提交 Pull Requests

欢迎提交增强功能、修复 Bug 或更新文档的 Pull Requests。

请遵守您正在修改的文件的编码风格，在 `.editorconfig` 文件存在的情况下，请启用并遵循它的规则。

---

## 致谢

在此对以下贡献者和项目表示感谢：

- [FeralAI](https://github.com/FeralAI) 创建了 [GP2040](https://github.com/FeralAI/GP2040)，为这个社区项目奠定了基础。
- Ha Thach 的出色 [TinyUSB 库](https://github.com/hathach/tinyusb) 示例。
- fluffymadness 的 [tinyusb-xinput](https://github.com/fluffymadness/tinyusb-xinput) 示例样本。
- Kevin Boone 关于使用 RP2040 闪存作为模拟 EEPROM 的[博客文章](https://kevinboone.me/picoflash.html)。
- [bitbank2](https://github.com/bitbank2) 提供了 [OneBitDisplay](https://github.com/bitbank2/OneBitDisplay) 和 [BitBang_I2C](https://github.com/bitbank2/BitBang_I2C) 库，这些库已移植到 Pico SDK 上。
- [arntsonl](https://github.com/arntsonl) 对代码的清理与功能增强，使我们达到了 v0.5.0 版本。
- [alirin222](https://github.com/alirin222) 提供了优秀的 Turbo 功能代码（在 Twitter 上关注 [@alirin222](https://twitter.com/alirin222)）。
- [deeebug](https://github.com/deeebug) 对 Web 界面的改进，以及修复了 PS3 Home 键的 Bug。
- [TheTrain](https://github.com/TheTrainGoes/GP2040-Projects) 和 [Fortinbra](https://github.com/Fortinbra) 为推动社区发展做出的贡献。
- [PassingLink](https://github.com/passinglink/passinglink) 提供了 PS4 实现的技术细节和代码。
- [Youssef Habchi](https://youssef-habchi.com/) 授权我们使用 Road Rage 字体。
- [tamanegitaro](https://github.com/tamanegitaro/) 和 [alirin222](https://github.com/alirin222) 提供了 Mini 和 Classic 控制器的基础工作。
- [Ryzee119](https://github.com/Ryzee119) 的出色项目 [ogx360_t4](https://github.com/Ryzee119/ogx360_t4) 以及用于 Xbox 原版支持的 xid_driver 库。
- [Santroller](https://github.com/Santroller/Santroller) 和 [GIMX](https://github.com/matlo/GIMX) 提供了 Xbox One 身份认证的技术示例。
