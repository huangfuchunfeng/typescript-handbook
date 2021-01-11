<template>
  <div class="basic-types">
    <p>为了让程序有价值，我们需要能够处理最简单的数据单元：数字，字符串，结构体，布尔值等。 TypeScript支持与JavaScript几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用。</p>
    <h2>
      <c-anchor id="Boolean">Boolean</c-anchor>
    </h2>
    <p>最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean（其它语言中也一样）。</p>

    <code-wrapper>
      <pre>
        <lsp><let></let> <span name="cln"></span>: boolean</lsp> = false
      </pre>
    </code-wrapper>
    <h2>
      <c-anchor id="Number">Number</c-anchor>
    </h2>
    <p>和JavaScript一样，TypeScript里的所有数字都是浮点数或大整数。 这些浮点数的类型是 number,而大整数的类型是 bigint。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。</p>
    <code-wrapper>
      <pre>
        <lsp><let></let> <span name="decimal"></span>: number</lsp> = 6;<clc>//十进制</clc>
        <lsp><let></let> <span name="hex"></span>: number</lsp> = 0xf00d;<clc>//十六进制(hexadecimal) 前缀0x</clc>
        <lsp><let></let> <span name="binary"></span>: number</lsp> = 0b1010;<clc>// 二进制(binary) 前缀ob</clc>
        <lsp><let></let> <span name="octal"></span>: number </lsp>= 0o744;<clc>// 八进制(octal Literal) 前缀0o</clc>
        <lsp><let></let> <span name="big"></span>: bigint</lsp> = 100n;<clc>// 大整型  任意大的整数 数字后缀n</clc>
      </pre>
    </code-wrapper>
    <p class="code-notes">
      提示：
      <br />可以使用 Number.prototype.toString(radix) 二进制 到 三十六进制之间转换
    </p>
    <h2>
      <c-anchor id="String">String</c-anchor>
    </h2>
    <p>JavaScript程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用 string表示文本数据类型。 和JavaScript一样，可以使用双引号（ "）或单引号（'）表示字符串。</p>
    <code-wrapper>
      <pre>
        <lsp><let></let> <span name="color"></span>: string</lsp> = "blue";  
        <cln>color <template #lsp><let></let> <cln>color</cln>: string</template> </cln> = 'red';
      </pre>
    </code-wrapper>
    <p>你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式</p>
    <code-wrapper>
      <pre>
        <lsp><let /> <span name="fullName"></span>: string</lsp> =  `Bob Bobbington`;
        <lsp><let /> <span name="age"></span>: number</lsp> = 37;
        <lsp><let /> <span name="sentence"></span>: string</lsp> = `Hello, my name is <let>${</let><cln>fullName<template #lsp><let></let> <cln>fullName</cln>: string</template></cln><let>}</let>. I'll be <let>${</let><cln>age<template #lsp><let></let> <cln>age</cln>: number</template></cln> + 1<let>}</let> years old next month.`;
      </pre>
    </code-wrapper>
    <h2>
      <c-anchor id="Array">Array</c-anchor>
    </h2>
    <p>TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：</p>
    <code-wrapper>
      <pre>
        <lsp> <let /> <span name="list"></span>: number[]</lsp> = [1, 2, 3]
      </pre>
    </code-wrapper>
    <p>第二种方法使用泛型数组类型,Array &lt;元素类型&gt;:</p>
    <code-wrapper>
      <pre>
       <let /> <cln>list  <template #lsp><let /> <cln>list</cln>: (string | number | string[])[]</template> </cln>: Array&lt;string | number | string[]> = ['1', 2, '3', ['4', '5']]
      </pre>
    </code-wrapper>
    <h2>
      <c-anchor id="Tupel">Tupel</c-anchor>
    </h2>
    <p>元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。</p>
    <code-wrapper>
      <pre>
        <clc>// 声明一个元组类型</clc>
        <lsp><let /> <span name="x"></span>: [string, number];</lsp>
        <clc>// 初始化</clc>
        <cln>x<template #lsp><let /> <cln>x</cln>: [string, number]</template></cln> = ['hello', 10] <clc>// 正确</clc>
        <clc>// 错误初始化</clc>
        <cln>x<template #lsp><let /> <cln>x</cln>: [string, number]</template></cln> = [<tip><template #content>Type 'number' is not assignable to type 'string'.</template><err>10</err></tip> ,<tip><err>'hello'</err><template #content>Type 'string' is not assignable to type 'number'.</template> </tip>] <clc>// 错误</clc>
      </pre>
    </code-wrapper>
    <p>当访问一个已知索引的元素，会得到正确的类型：</p>
    <code-wrapper>
      <pre>
        console.log(x[0].substring(1)) <clc>// OK</clc>
        console.log(x[1].<tip><template #content>Property 'substring' does not exist on type 'number'</template><err>substring(1)</err></tip>); <clc>// Error</clc>
      </pre>
    </code-wrapper>
    <p>访问一个索引之外的元素会失败，并产生一个错误</p>
    <code-wrapper>
      <pre><tip><template #content>
          <p>Type '"world"' is not assignable to type 'undefined'</p>
          <p>Tuple type '[string, number]' of length '2' has no element at index '2'</p>
          </template><err>x[2]</err></tip> = 'world' <clc>// Error</clc>
      console.log(<tip><template #content>
          <p>Object is possibly 'undefined'</p>
          <p>Tuple type '[string, number]' of length '2' has no element at index '5'</p>
          </template><err>x[5]</err></tip>.toString());<clc>// Error</clc>
      </pre>
    </code-wrapper>
  </div>
</template>

<script lang="ts">
import CodeView from '../components/code-views'
import { Vue, Options } from 'vue-class-component'
import CAnchor from '@/components/anchor.vue'
@Options({
  components: {
    ...CodeView,
    let: CodeView.clt,
    CAnchor,
  },
  data() {
    return {
      hello: 'hello',
    }
  },
})
export default class BasicTypes extends Vue {
  ts = 'let isDone: boolean = false;'
  created() {
    const isDone: boolean = false
    const decimal: number = 6 //十进制
    const hex: number = 0xf00d
    const binary: number = 0b1010
    const octal: number = 0o744
    const big: bigint = 100n

    const fullName: string = `Bob Bobbington`
    const age: number = 37
    const sentence: string = `Hello, my name is ${fullName}. I'll be ${
      age + 1
    } years old next month.`
    const list: number[] = [1, 2, 3]
    const list2: Array<string | number | string[]> = ['1', 2, '3', ['4', '5']]
    const x: [string, number] = ['100', 2]
    console.log(
      isDone,
      decimal,
      hex,
      binary,
      octal,
      big,
      sentence,
      list,
      list2,
      x,
      x[0].substring(1)
    )
  }
}
</script>
<style lang="scss">
</style>