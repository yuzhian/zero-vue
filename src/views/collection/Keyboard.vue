<template>
  <a-input ref="input" type="text" w="full" m="b-2" />

  <div grid="~ rows-1 cols-30 gap-1" select="none">
    <button v-for="{ code, text, span } in keys" :key="code" :ref="code" bg="white" leading="16" rounded="default" text="center" cursor="pointer" :class="span">
      {{ text }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue'

const { proxy }: any = getCurrentInstance()

// 键盘点击修改按键颜色
function changeKeyColor(code: string, color = 'white') {
  proxy.$refs[code] && (proxy.$refs[code].style.backgroundColor = color)
}
document.onkeydown = e => changeKeyColor(e.code, '#ccc')
document.onkeyup = e => changeKeyColor(e.code)

// 聚焦输入框
onMounted(() => {
  proxy.$refs.input.focus()
})

const keys = [
  { text: `~`, code: `Backquote`, span: 'col-span-2' },
  { text: `1`, code: `Digit1`, span: 'col-span-2' },
  { text: `2`, code: `Digit2`, span: 'col-span-2' },
  { text: `3`, code: `Digit3`, span: 'col-span-2' },
  { text: `4`, code: `Digit4`, span: 'col-span-2' },
  { text: `5`, code: `Digit5`, span: 'col-span-2' },
  { text: `6`, code: `Digit6`, span: 'col-span-2' },
  { text: `7`, code: `Digit7`, span: 'col-span-2' },
  { text: `8`, code: `Digit8`, span: 'col-span-2' },
  { text: `9`, code: `Digit9`, span: 'col-span-2' },
  { text: `0`, code: `Digit0`, span: 'col-span-2' },
  { text: `-`, code: `Minus`, span: 'col-span-2' },
  { text: `=`, code: `Equal`, span: 'col-span-2' },
  { text: `⌫`, code: `Backspace`, span: 'col-span-4' },

  { text: `Tab`, code: `Tab`, span: 'col-span-3' },
  { text: `Q`, code: `KeyQ`, span: 'col-span-2' },
  { text: `W`, code: `KeyW`, span: 'col-span-2' },
  { text: `E`, code: `KeyE`, span: 'col-span-2' },
  { text: `R`, code: `KeyR`, span: 'col-span-2' },
  { text: `T`, code: `KeyT`, span: 'col-span-2' },
  { text: `Y`, code: `KeyY`, span: 'col-span-2' },
  { text: `U`, code: `KeyU`, span: 'col-span-2' },
  { text: `I`, code: `KeyI`, span: 'col-span-2' },
  { text: `O`, code: `KeyO`, span: 'col-span-2' },
  { text: `P`, code: `KeyP`, span: 'col-span-2' },
  { text: `[`, code: `BracketLeft`, span: 'col-span-2' },
  { text: `]`, code: `BracketRight`, span: 'col-span-2' },
  { text: `\\`, code: `Backslash`, span: 'col-span-3' },

  { text: `⇪`, code: `CapsLock`, span: 'col-span-4' },
  { text: `A`, code: `KeyA`, span: 'col-span-2' },
  { text: `S`, code: `KeyS`, span: 'col-span-2' },
  { text: `D`, code: `KeyD`, span: 'col-span-2' },
  { text: `F`, code: `KeyF`, span: 'col-span-2' },
  { text: `G`, code: `KeyG`, span: 'col-span-2' },
  { text: `H`, code: `KeyH`, span: 'col-span-2' },
  { text: `J`, code: `KeyJ`, span: 'col-span-2' },
  { text: `K`, code: `KeyK`, span: 'col-span-2' },
  { text: `L`, code: `KeyL`, span: 'col-span-2' },
  { text: `;`, code: `Semicolon`, span: 'col-span-2' },
  { text: `'`, code: `Quote`, span: 'col-span-2' },
  { text: `⏎`, code: `Enter`, span: 'col-span-4' },

  { text: `Shift`, code: `ShiftLeft`, span: 'col-span-5' },
  { text: `Z`, code: `KeyZ`, span: 'col-span-2' },
  { text: `X`, code: `KeyX`, span: 'col-span-2' },
  { text: `C`, code: `KeyC`, span: 'col-span-2' },
  { text: `V`, code: `KeyV`, span: 'col-span-2' },
  { text: `B`, code: `KeyB`, span: 'col-span-2' },
  { text: `N`, code: `KeyN`, span: 'col-span-2' },
  { text: `M`, code: `KeyM`, span: 'col-span-2' },
  { text: `,`, code: `Comma`, span: 'col-span-2' },
  { text: `.`, code: `Period`, span: 'col-span-2' },
  { text: `/`, code: `Slash`, span: 'col-span-2' },
  { text: `Shift`, code: `ShiftRight`, span: 'col-span-5' },

  { text: `⌃`, code: `ControlLeft`, span: 'col-span-4' },
  { text: `⌥`, code: `AltLeft`, span: 'col-span-2' },
  { text: `⌘`, code: `MetaLeft`, span: 'col-span-3' },
  { text: `Space`, code: `Space`, span: 'col-span-12' },
  { text: `⌘`, code: `MetaRight`, span: 'col-span-3' },
  { text: `⌥`, code: `AltRight`, span: 'col-span-2' },
  { text: `⌃`, code: `ControlRight`, span: 'col-span-4' },
]
</script>
