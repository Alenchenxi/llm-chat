import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-multi-spaces": 2, // 不允许多个连续的空格
      "no-mixed-spaces-and-tabs": 2, // 不允许混合使用空格和制表符
      "no-multiple-empty-lines": [2, { max: 1 }], // 连续空行不超过 1 行
      "no-irregular-whitespace": 2, // 不允许出现不规则的空白字符
      camelcase: [1, { properties: "always" }], // 强制使用驼峰命名法
      "new-cap": ["error", { newIsCap: true, capIsNew: false }], // 构造函数首字母必须大写
      eqeqeq: [2, "always", { null: "ignore" }], // 强制使用全等 (===) 运算符
      "no-loop-func": 2, // 禁止在循环中定义函数
      "max-lines": [2, 500], // 限制文件最大行数为 500
      "max-params": [1, 6], // 函数参数最大数量为 6
      "no-eval": 2, // 禁止使用 eval
      "prefer-const": 2, // 必须使用 const 声明不变的变量
      "no-var": 2, // 禁止使用 let/const 替代 var
      "prefer-destructuring": [
        1,
        { object: true, array: false }, // 建议使用解构赋值
      ],
      "prefer-template": 1, // 建议使用模板字符串
      "template-curly-spacing": [2, "never"], // 模板字符串中的花括号内不允许有空格
      "no-duplicate-imports": 2, // 禁止重复导入
    },
  },
];
