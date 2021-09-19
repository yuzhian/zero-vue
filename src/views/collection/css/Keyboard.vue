<template>
  <div class="grid grid-rows-1 grid-cols-30 gap-1 select-none">
    <button v-for="{ code, text, span } in keys" :key="code" :ref="code" bg="white" leading="16" rounded="default" text="center" cursor="pointer" :class="span">
      {{ text }}
    </button>
  </div>
</template>

<script setup>
const keys = [
  { text: `~`, key: `~`, code: `Backquote`, span: 'col-span-2' },
  { text: `1`, key: `1`, code: `Digit1`, span: 'col-span-2' },
  { text: `2`, key: `2`, code: `Digit2`, span: 'col-span-2' },
  { text: `3`, key: `3`, code: `Digit3`, span: 'col-span-2' },
  { text: `4`, key: `4`, code: `Digit4`, span: 'col-span-2' },
  { text: `5`, key: `5`, code: `Digit5`, span: 'col-span-2' },
  { text: `6`, key: `6`, code: `Digit6`, span: 'col-span-2' },
  { text: `7`, key: `7`, code: `Digit7`, span: 'col-span-2' },
  { text: `8`, key: `8`, code: `Digit8`, span: 'col-span-2' },
  { text: `9`, key: `9`, code: `Digit9`, span: 'col-span-2' },
  { text: `0`, key: `0`, code: `Digit0`, span: 'col-span-2' },
  { text: `-`, key: `-`, code: `Minus`, span: 'col-span-2' },
  { text: `=`, key: `=`, code: `Equal`, span: 'col-span-2' },
  { text: `Backspace`, key: `Backspace`, code: `Backspace`, span: 'col-span-4' },

  { text: `Tab`, key: `Tab`, code: `Tab`, span: 'col-span-3' },
  { text: `Q`, key: `Q`, code: `KeyQ`, span: 'col-span-2' },
  { text: `W`, key: `W`, code: `KeyW`, span: 'col-span-2' },
  { text: `E`, key: `E`, code: `KeyE`, span: 'col-span-2' },
  { text: `R`, key: `R`, code: `KeyR`, span: 'col-span-2' },
  { text: `T`, key: `T`, code: `KeyT`, span: 'col-span-2' },
  { text: `Y`, key: `Y`, code: `KeyY`, span: 'col-span-2' },
  { text: `U`, key: `U`, code: `KeyU`, span: 'col-span-2' },
  { text: `I`, key: `I`, code: `KeyI`, span: 'col-span-2' },
  { text: `O`, key: `O`, code: `KeyO`, span: 'col-span-2' },
  { text: `P`, key: `P`, code: `KeyP`, span: 'col-span-2' },
  { text: `[`, key: `[`, code: `BracketLeft`, span: 'col-span-2' },
  { text: `]`, key: `]`, code: `BracketRight`, span: 'col-span-2' },
  { text: `\\`, key: `\\`, code: `Backslash`, span: 'col-span-3' },

  { text: `CapsLock`, key: `CapsLock`, code: `CapsLock`, span: 'col-span-4' },
  { text: `A`, key: `A`, code: `KeyA`, span: 'col-span-2' },
  { text: `S`, key: `S`, code: `KeyS`, span: 'col-span-2' },
  { text: `D`, key: `D`, code: `KeyD`, span: 'col-span-2' },
  { text: `F`, key: `F`, code: `KeyF`, span: 'col-span-2' },
  { text: `G`, key: `G`, code: `KeyG`, span: 'col-span-2' },
  { text: `H`, key: `H`, code: `KeyH`, span: 'col-span-2' },
  { text: `J`, key: `J`, code: `KeyJ`, span: 'col-span-2' },
  { text: `K`, key: `K`, code: `KeyK`, span: 'col-span-2' },
  { text: `L`, key: `L`, code: `KeyL`, span: 'col-span-2' },
  { text: `;`, key: `;`, code: `Semicolon`, span: 'col-span-2' },
  { text: `'`, key: `'`, code: `Quote`, span: 'col-span-2' },
  { text: `Enter`, key: `Enter`, code: `Enter`, span: 'col-span-4' },

  { text: `Shift`, key: `Shift`, code: `ShiftLeft`, span: 'col-span-5' },
  { text: `Z`, key: `Z`, code: `KeyZ`, span: 'col-span-2' },
  { text: `X`, key: `X`, code: `KeyX`, span: 'col-span-2' },
  { text: `C`, key: `C`, code: `KeyC`, span: 'col-span-2' },
  { text: `V`, key: `V`, code: `KeyV`, span: 'col-span-2' },
  { text: `B`, key: `B`, code: `KeyB`, span: 'col-span-2' },
  { text: `N`, key: `N`, code: `KeyN`, span: 'col-span-2' },
  { text: `M`, key: `M`, code: `KeyM`, span: 'col-span-2' },
  { text: `,`, key: `,`, code: `Comma`, span: 'col-span-2' },
  { text: `.`, key: `.`, code: `Period`, span: 'col-span-2' },
  { text: `/`, key: `/`, code: `Slash`, span: 'col-span-2' },
  { text: `Shift`, key: `Shift`, code: `ShiftRight`, span: 'col-span-5' },

  { text: `Ctrl`, key: `Ctrl`, code: `ControlLeft`, span: 'col-span-3' },
  { text: `Fn`, key: `Fn`, code: `Fn`, span: 'col-span-2' },
  { text: `Win`, key: `OS`, code: `OSLeft`, span: 'col-span-2' },
  { text: `Alt`, key: `Alt`, code: `AltLeft`, span: 'col-span-2' },
  { text: `Space`, key: ` `, code: `Space`, span: 'col-span-10' },
  { text: `Alt`, key: `Alt`, code: `AltRight`, span: 'col-span-2' },
  { text: `Ctrl`, key: `Ctrl`, code: `ControlRight`, span: 'col-span-3' },
  { text: `Command`, key: `Command`, code: `Command`, span: 'col-span-6' },
]
</script>
