<template>
  <div class="base_type docs-container">
    <h1 class="page_title">基础类型</h1>
    <h1>介绍</h1>
    <p>
      为了让程序有价值，我们需要能够处理最简单的数据单元：数字，字符串，结构体，布尔值等。
      TypeScript支持与JavaScript几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用。
    </p>
    <h1>布尔值</h1>
    <p>最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean（其它语言中也一样）。</p>
    <c-code>
      <pre><span>let</span> isDone:<span>boolean</span> = false;
      </pre>
    </c-code>
    <h1>数字</h1>
    <p>
      和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是
      number。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript
      2015中引入的二进制和八进制字面量。
    </p>
    <c-code>
      <pre><span>let </span>decLiteral:<span>number</span> = 6;<i>//十进制</i>
        <span>let </span>hexLiteral:<span>number</span> = 0xf00d;<i>//十六进制(hexadecimal) 前缀0x</i>
        <span>let </span>binaryLiteral:<span>number</span> = 0b1010;<i>// 二进制(binary) 前缀ob</i>          
        <span>let </span>octalLiteral:<span>number</span> = 0o744;<i>// 八进制(octonary) 前缀0o</i>
     </pre>
    </c-code>
    <h1>字符串</h1>
    <p>JavaScript程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用 string表示文本数据类型。 和JavaScript一样，可以使用双引号（ "）或单引号（'）表示字符串。</p>
    <c-code>
      <pre><span>let</span> name: <span>string</span> = "皇甫";
        name = "春风";
      </pre>
    </c-code>
    <p>你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式</p>
    <c-code>
      <pre><span>let</span> name: <span>string</span> = `Gene`;
          <span>let</span> age: <span>number</span> = 37;
          <span>let</span> sentence: <span>string</span> = `Hello, my name is ${ name }.I'll be ${ age + 1 } years old next month.`;
      </pre>
    </c-code>
    <p>这与下面定义sentence的方式效果相同：</p>
    <c-code>
      <pre><span>let</span> sentence: <span>string</span> = "Hello, my name is " + name + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";</pre>
    </c-code>
    <h1>数组</h1>
    <p>TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：</p>
    <c-code>
      <pre><span>let</span> list: <span>number</span>[] = [1, 2, 3];</pre>
    </c-code>
    <p>第二种方式是使用数组泛型，Array&lt;元素类型 &gt;：</p>
    <c-code>
      <pre><span>let</span> list: <span>Array</span>&lt;<span>number</span>&gt; = [1, 2, 3];</pre>
    </c-code>
    <h1>元组 Tuple</h1>
    <p>元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。</p>
    <c-code>
      <pre><i>// Declare a tuple type</i>
          <span>let</span> x: [<span>string</span>,<span>number</span>];
          <i>// Initialize it</i>
          x = ['hello', 10];<i>// OK</i>
          <i> // Initialize it incorrectly</i>
          x = [10, 'hello']; 
          <i>// ErrorType 'number' is not assignable to type 'string'. </i>
          <i>//Type 'string' is not assignable to type 'number'.</i>
      </pre>
    </c-code>
    <p>当访问一个已知索引的元素，会得到正确的类型：</p>
    <c-code>
      <pre>console.log(x[0].substring(1)); // OK
        console.log(x[1].substring(1)); // Error, Property 'substring' does not exist on type 'number'.
      </pre>
    </c-code>
    <p>访问元组已知索引之外的元素失败，并显示以下错误：</p>
    <c-code>
      <pre>x[3] = "world"; <i>// Error</i>
      <em>Tuple type '[string, number]' of length '2' has no element at index '3'.</em>
        console.log(x[5].toString());<i>// Error</i>
        <em>Object is possibly 'undefined'.
          Tuple type '[string, number]' of length '2' has no element at index '5'.</em>
      </pre>
    </c-code>
    <h1>枚举 enum</h1>
    <p>enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。</p>
    <c-code>
      <pre>
        <span>enum</span> Color {
          &nbsp;  Red,
          &nbsp;  Green,
          &nbsp; Blue,
        }
        <span>let</span>  c: Color = Color.Green; <i>// console.log(c):1</i>
      </pre>
    </c-code>
    <p>默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：</p>
    <c-code>
      <pre>
        <span>enum</span>  Color {
          &nbsp;  Red = 1,
          &nbsp;  Green,
          &nbsp; Blue,
        }
        <span>let</span>  c: Color = Color.Green; <i>// console.log(c):2</i>
      </pre>
    </c-code>
    <p>或者，全部都采用手动赋值：</p>
    <c-code>
      <pre>
        <span>enum</span>  Color {
          &nbsp;  Red = 1,
          &nbsp;  Green = 10,
          &nbsp; Blue = 100,
        }
        <span>let</span>  c: Color = Color.Green; <i>// console.log(c):10</i>
      </pre>
    </c-code>
    <p>枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：</p>
    <c-code>
      <pre>
        <span>enum</span>  Color {
          &nbsp;  Red = 1,
          &nbsp;  Green = 10,
          &nbsp; Blue = 100,
        }
        <span>let</span> colorName: string = Color[2];<i>// undefined</i>
        <span>let</span> colorName: string = Color[100];<i>// Blue</i>
      </pre>
    </c-code>
  </div>
</template>
<script lang="ts">
// import { nextTick } from 'vue'
import { Vue, Options } from 'vue-class-component'

import CCode from './components/code.vue'
@Options({
  components: {
    CCode,
  },
})
export default class BaseType extends Vue {
  mounted() {
    // let isDone: boolean = false
    // nextTick(() => {
    //   //
    //   isDone = true
    // })
    // console.log(isDone)
    // let name: string = '皇甫'
    // name = '春风'
    // console.log(name)
    // const age: number = 30
    // let sentence: string = `Hello，My name is ${name}。I'll be ${
    //   age + 1
    // } years old next years`
    // sentence =
    //   'Hello, my name is ' +
    //   name +
    //   '.\n\n' +
    //   "I'll be " +
    //   (age + 1) +
    //   ' years old next month.'
    // console.log(age, sentence)
    // const list: number[] = [1, 2, 3]
    // console.log('list:Number[]', list)
    // const list2: Array<string | number> = ['1', '2', 3]
    // console.log('list2: Array<string | number>', list2)
    // let x: [string, string, number]
    // x = ['hello', 'huangfu', 10]
    // x = ['huangfu', 'huangfu', 10]
    // // console.log('let x: [string, number]', x)
    // // console.log('x.length', x.length)
    // // console.log('x.length', x[0])
    enum Color {
      Red = 1,
      Green,
      Black = 100,
      Grey,
      Blue,
    }
    const c: Color = Color.Green
    const colorName: string = Color[100]
    console.log(c, Color[100], `Color[100]:${colorName}`)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const looselyTyped: any = 4
    looselyTyped.toFixed()
    // const strictlyTyped: unknown = 4
    // strictlyTyped.toFixed()
  }
}
</script>
