export default [
  {
    path: '/typescript',
    name: 'typescript',
    component: () => import('@/views/typescript/typescript.vue'),
    redirect: { name: 'handbook' },
    children: [
      {
        name: 'get-started',
        path: 'handbook',
        meta: {
          title: '起步'
        },
        component: () =>
          import('@/views/typescript/components/empty-router-view.vue'),
        children: [
          {
            name: 'typescript-from-scratch',
            path: 'typescript-from-scratch',
            meta: {
              title: '新程序员上手'
            },
            component: () =>
              import(
                '@/views/typescript/handbook/get-started/typescript-from-scratch.vue'
              )
          },
          {
            name: 'typescript-in-5-minutes',
            path: 'typescript-in-5-minutes',
            meta: {
              title: 'JavaScript程序员上手'
            },
            component: () =>
              import(
                '@/views/typescript/handbook/get-started/typescript-in-5-minutes.vue'
              )
          },
          {
            name: 'typescript-in-5-minutes-oop',
            path: 'typescript-in-5-minutes-oop',
            meta: {
              title: 'Java/C#程序员上手'
            },
            component: () =>
              import(
                '@/views/typescript/handbook/get-started/typescript-in-5-minutes-oop.vue'
              )
          },
          {
            name: 'typescript-in-5-minutes-func',
            path: 'typescript-in-5-minutes-func',
            meta: {
              title: 'Functional程序员上手'
            },
            component: () =>
              import(
                '@/views/typescript/handbook/get-started/typescript-in-5-minutes-func.vue'
              )
          },
          {
            name: 'typescript-tooling-in-5-minutes',
            path: 'typescript-tooling-in-5-minutes',
            meta: {
              title: '5分钟上手TypeScript工具'
            },
            component: () =>
              import(
                '@/views/typescript/handbook/get-started/typescript-tooling-in-5-minutes.vue'
              )
          }
        ]
      },
      {
        name: 'handbook',
        path: 'handbook',
        redirect: {
          name: 'basic-types'
        },
        meta: {
          title: '手册指南'
        },
        component: () => import('@/views/typescript/components/empty-router-view.vue'),
        children: [
          {
            name: 'basic-types',
            path: 'basic-types',
            meta: {
              title: '基础类型'
            },
            component: () => import('@/views/typescript/handbook/basic-types.vue')
          },
          {
            name: 'interfaces',
            path: 'interfaces',
            meta: {
              title: '接口'
            },
            component: () => import('@/views/typescript/handbook/interfaces.vue')
          },
          {
            name: 'functions',
            path: 'functions',
            meta: {
              title: '函数'
            },
            component: () => import('@/views/typescript/handbook/functions.vue')
          },
          {
            name: 'literal-types',
            path: 'literal-types',
            meta: {
              title: '文字类型'
            },
            component: () => import('@/views/typescript/handbook/literal-types.vue')
          },
          {
            name: 'unions-and-intersections',
            path: 'unions-and-intersections',
            meta: {
              title: '联合类型和交叉类型'
            },
            component: () => import('@/views/typescript/handbook/unions-and-intersections.vue')
          },
          {
            name: 'classes',
            path: 'classes',
            meta: {
              title: '类'
            },
            component: () => import('@/views/typescript/handbook/classes.vue')
          },
          {
            name: 'enums',
            path: 'enums',
            meta: {
              title: '枚举'
            },
            component: () => import('@/views/typescript/handbook/enums.vue')
          },
          {
            name: 'generics',
            path: 'generics',
            meta: {
              title: '泛型'
            },
            component: () => import('@/views/typescript/handbook/generics.vue')
          }
        ]
      },
      {
        name: 'handbook-reference',
        path: 'handbook',
        meta: {
          title: '手册参考'
        },
        component: () => import('@/views/typescript/components/empty-router-view.vue'),
        children: [
          {
            name: 'advanced-types',
            path: 'advanced-types',
            meta: {
              title: '高级类型'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/advanced-types.vue')
          },
          {
            name: 'utility-types',
            path: 'utility-types',
            meta: {
              title: '实用类型'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/utility-types.vue')
          },
          {
            name: 'decorators',
            path: 'decorators',
            meta: {
              title: '装饰器'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/decorators.vue')
          },
          {
            name: 'declaration-merging',
            path: 'declaration-merging',
            meta: {
              title: '声明合并'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/declaration-merging.vue')
          },
          {
            name: 'iterators-and-generators',
            path: 'iterators-and-generators',
            meta: {
              title: '迭代器和生成器'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/iterators-and-generators.vue')
          },
          {
            name: 'jsx',
            path: 'jsx',
            meta: {
              title: 'JSX'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/jsx.vue')
          },
          {
            name: 'mixins',
            path: 'mixins',
            meta: {
              title: 'Mixins'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/mixins.vue')
          },
          {
            name: 'modules',
            path: 'modules',
            meta: {
              title: '模块'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/modules.vue')
          },
          {
            name: 'module-resolution',
            path: 'module-resolution',
            meta: {
              title: '模块解析'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/module-resolution.vue')
          },
          {
            name: 'namespaces',
            path: 'namespaces',
            meta: {
              title: '命名空间'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/namespaces.vue')
          },
          {
            name: 'namespaces-and-modules',
            path: 'namespaces-and-modules',
            meta: {
              title: '命名空间和模块'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/namespaces-and-modules.vue')
          },
          {
            name: 'symbols',
            path: 'symbols',
            meta: {
              title: 'symbols'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/symbols.vue')
          },
          {
            name: 'triple-slash-directives',
            path: 'triple-slash-directives',
            meta: {
              title: '三斜线指令'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/triple-slash-directives.vue')
          },
          {
            name: 'type-compatibility',
            path: 'type-compatibility',
            meta: {
              title: '类型兼容性'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/type-compatibility.vue')
          },
          {
            name: 'type-inference',
            path: 'type-inference',
            meta: {
              title: '类型推论'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/type-inference.vue')
          },
          {
            name: 'variable-declarations',
            path: 'variable-declarations',
            meta: {
              title: '变量声明'
            },
            component: () => import('@/views/typescript/handbook/handbook-reference/variable-declarations.vue')
          }
        ]
      },
      {
        name: 'tutorials',
        path: 'handbook',
        meta: {
          externalLink: 'https://www.typescriptlang.org/docs/handbook/asp-net-core.html',
          title: 'Tutorials'
        },
        component: () => import('@/views/typescript/components/empty-router-view.vue'),
      },
      {
        name: 'what-is-new',
        path: 'handbook',
        meta: {
          externalLink: 'https://www.typescriptlang.org/docs/handbook/release-notes/overview.html',
          title: 'What\'s New'
        },
        component: () => import('@/views/typescript/components/empty-router-view.vue'),
      },
      {
        name: 'declaration-files',
        path: 'handbook/declaration-files',
        meta: {
          title: '声明文件'
        },
        component: () => import('@/views/typescript/components/empty-router-view.vue'),
        children: [
          {
            name: 'introduction',
            path: 'introduction',
            meta: {
              title: '介绍'
            },
            component: () => import('@/views/typescript/handbook/declaration-files/introduction.vue')
          },
          {
            name: 'templates',
            path: 'templates',
            meta: {
              title: '.d.ts 模板'
            },
            redirect: {
              name: 'module-d-ts'
            },
            component: () => import('@/views/typescript/components/empty-router-view.vue'),
            children: [
              {
                name: 'module-d-ts',
                path: 'module-d-ts',
                meta: {
                  title: '模块 .d.ts'
                },
                component: () => import('@/views/typescript/handbook/declaration-files/templates/module-d-ts.vue')
              }
            ]
          }
        ]
      }
    ]
  }
]
