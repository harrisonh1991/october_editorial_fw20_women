import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";
import Hero from './components/Hero/Hero.jsx';
import ScrollMagicDiv from './components/ScrollMagic/ScrollMagicDiv.jsx';
import ProductShow from "./components/productShow/productShow.jsx";
import Image from './components/Image/image.jsx';
import RedirectBannerCta from './components/Redirect/redirectBannerCta.jsx';
import {ShopAll} from './components/shopAll/shopAll.jsx';

import './App.scss';

const App = () => (
    <article className="App">
        <ScrollMagicDiv 
            scrollMagicItems={[{
                triggerElement: 'sm0',
                pin: true, 
                duration: "1000",
                triggerHook:'onLeave',
                from:{ rotation: -360, scale: .35, y: '-35%', top: 0, paddingBottom: '0px', paddingTop:'0', backgroundColor: 'white'},
                to: { rotation: 0, scale: 1, y: '0%', top: 0, paddingBottom: '0px', paddingTop:'700px',},
                children: (
                    <Hero 
                        banner={<Image image={{ mobile: "//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483890313777.jpg", desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483853918551.jpg'}}/>}
                        title={<div>风格盛宴<br/>直击 <i>2020</i> 秋冬潮流趋势</div>}
                        content="2020 年已然过半，在经历了漫长的沉寂与等待后，潮流灵感在秋冬季节被唤醒。撷取日常，贡献创意，引发思考，设计师们用作品和传统工艺对话，与现代风格交手，兼收并蓄，多面展现时尚的魅力，带领我们共同探寻潮流与生活的更多可能。"
                    />
                )
            }]}>
        </ScrollMagicDiv>
        <main className="main">
            <ProductShow 
                title="复古格纹大势回潮" 
                content="纵观几大时装周，格纹元素是本季无法忽视的重头戏。颇具年代感的面料以复古配色致敬传统手工艺，同时采用更为宽大肃穆的廓形模糊性别界限，将乡村感与都市感巧妙结合，既怀旧摩登又时尚新潮。"
                scrollMagicItems={[{
                    triggerElement: 'sm1_1',
                    children:(<Image image={{mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543354896207.jpg', desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543337675609.jpg'}}/>),
                    from: {rotation:3},
                    to: {rotation:0},
                    duration: '300'
                },
                {
                    triggerElement: 'sm1_2',
                    children:(<Image image={{mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543343879889.jpg', desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/15/16027543335755485.jpg'}}/>),
                    from: {rotation:10},
                    to: {rotation:0},
                    duration: '300'
                }]}
                photosTags={['LOLOT', 'PORTS PURE']}
                triggerHook="onLeave"
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'ANXPTAK0338XFPKZ',
                            name: '格纹阔腿休闲裤',
                            brand: 'Acne Studios',
                        },
                        {
                            sku: 'JNPDSPW2A7WDFNYZ',
                            name: '褶饰拼接格纹连衣裙',
                            brand: 'SJYP',
                        },
                        {
                            sku: 'ANXKNA60218XFRDZ',
                            name: '格纹落肩针织衫',
                            brand: 'Acne Studios',
                        },
                        {
                            sku: 'IROOC213MALXFGRZ',
                            name: '双口袋落肩格纹外套',
                            brand: 'IRO',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="拼接狂想释放脑洞" 
                content="拼接作为这一季的关键词，再次带来了不小的惊喜。设计师们将不同材质随心剪裁、自由组合，让高饱和度、高明度的色彩相互碰撞，用新颖的重叠和搭配打破常规，展现了一个又一个有趣的灵魂。"
                scrollMagicItems={[{
                    triggerElement: 'sm2_1',
                    children:(<Image image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483877091150.jpg', mobile:'//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483897397237.jpg'}}/>),
                    from: {rotation:3},
                    to: {rotation:0},
                    duration: 300,
                },
                {
                    triggerElement: 'sm2_2',
                    children:(<Image image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483856581770.jpg', mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/160264839006165.jpg'}}/>),
                    from: {rotation:-10},
                    to: {rotation:0},
                    duration: 300,
                }]}
                photosTags={['Y\' s']}
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'MHRJK5BL161XFPPH',
                            name: '拼接设计飞行员夹克',
                            brand: 'Mihara Yasuhiro',
                        },
                        {
                            sku: 'JNPJKPW2A7WAFNYZ',
                            name: '格纹拼接仿两件式西装外套',
                            brand: 'SJYP',
                        },
                        {
                            sku: 'ENFTP301010XFBLZ',
                            name: '褶饰叠层拼色上衣',
                            brand: 'ENFOLD',
                        },
                        {
                            sku: 'ENFSK310740XFNYZ',
                            name: 'ENFOLD',
                            brand: '叠层拼接半身裙',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="维多利亚风格复辟古典" 
                content="拼接作为这一季的关键词，再次带来了不小的惊喜。设计师们将不同材质随心剪裁、自由组合，让高饱和度、高明度的色彩相互碰撞，用新颖的重叠和搭配打破常规，展现了一个又一个有趣的灵魂。"

                scrollMagicItems={[{
                    triggerElement: 'sm3_1',
                    children:(<Image image={{ src: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483876985915.jpg'}}/>),
                    from: {rotation:10},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm3_2',
                    children:(<Image image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/1602648387980436.jpg', mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483881579611.jpg'}}/>),
                    from: {rotation:20},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm3_3',
                    children:(<Image image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483815051077.jpg', mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483881587833.jpg'}}/>),
                    from: {rotation:-20},
                    to: {rotation:0},
                    duration: 300
                }]}
                photosTags={['Comme des Garçons', 'Simone Rocha', 'GLADYS TAMEZ MILLINERY']}
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'N21DS835593CFWHX',
                            name: '褶饰叠层连衣裙',
                            brand: 'N°21',
                        },
                        {
                            sku: 'RDVDSA145BSXFPKL',
                            name: '褶饰薄纱泡泡袖连衣裙',
                            brand: 'REDValentino',
                        },
                        {
                            sku: 'RDVTPB00UT9XEWHX',
                            name: '透视效果蕾丝拼接上衣',
                            brand: 'REDValentino',
                        },
                        {
                            sku: 'SMRTETS284BXFWHX',
                            name: '珠饰蕾丝叠层 T 恤',
                            brand: 'Simone Rocha',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="质感皮革势不可挡" 
                content="本季，皮革元素的个性酷感仍在继续，高调登场的皮革感单品为秋冬带来不少惊喜。设计师们通过色彩、肌理、光泽等变化革新这一材质的造型款式，少了奢华亮眼的装饰，皮革本身的质感被更大程度地保留了下来，打造成兼顾实穿性与舒适感的单品，令人难以抗拒。"
                
                scrollMagicItems={[{
                    triggerElement: 'sm4_1',
                    children:(<Image image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483812502540.jpg', mobile:'//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483883307777.jpg'}}/>),
                    from: {rotation:10},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm4_2',
                    children:(<Image image={{ src: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483846561791.jpg'}}/>),
                    from: {rotation:-10},
                    to: {rotation:0},
                    duration: 300
                }]}
                photosTags={['ZUCCA', 'OFF-WHITE c/o VIRGIL ABLOH']}
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'ZVXSKCU1402FFBDX',
                            name: 'Joslin Cuir 褶皱皮革半身裙',
                            brand: 'Zadig & Voltaire',
                        },
                        {
                            sku: 'TIBSPFP4107XFBKX',
                            name: '车线边饰皮革感短裤',
                            brand: 'Tibi',
                        },
                        {
                            sku: 'MSGSPB03652AFRDX',
                            name: '饰口袋皮革感短裤',
                            brand: 'MSGM',
                        },
                        {
                            sku: 'ANXLE1AZ166XDBKX',
                            name: '皮革机车夹克',
                            brand: 'Acne Studios',
                        }
                    ]
                }}
            />
            <ProductShow 
                title="精准剪裁飒气登场" 
                content="型格并不局限于特立独行或是鹤立鸡群，有时内敛反而更有力量。于是，严谨利落的精准剪裁在这一季强势回潮，唤起人们对于六七十年代含蓄之美的印象，既深邃沉静又突显轮廓，保持距离的同时悄然展现冷浪漫。"
                scrollMagicItems={[{
                    triggerElement: 'sm5_1',
                    children:(<Image image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483821094942.jpg', mobile:'//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483887295464.jpg'}}/>),
                    from: {rotation: -20},
                    to: {rotation:0},
                    duration: 300
                },
                {
                    triggerElement: 'sm5_2',
                    children:(<Image image={{ desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483829061284.jpg', mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483892281804.jpg'}}/>),
                    from: {rotation: 10},
                    to: {rotation:0},
                    duration: 300
                }]}
                photosTags={['Comme des Garçons']}
                products={{
                    shopUrl: "https://cn.iteshop.com/b_it/item/",
                    imageUrl: 'https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/' ,
                    imageUrl_end: "-pdp-1.jpg?x-oss-process=image/resize,w_460,h_574,limit_0,m_pad" ,
                    lists: [
                        {
                            sku: 'OFWJK050011XFBKX',
                            name: '饰 logo 单粒扣西装外套',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        },
                        {
                            sku: 'OFWOC222011XFBKX',
                            name: '挖剪细节直排扣外套',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        },
                        {
                            sku: 'OFWOC218026XFBGX',
                            name: '饰口袋直排扣外套',
                            brand: 'OFF-WHITE c/o VIRGIL ABLOH™',
                        },
                        {
                            sku: 'HLXOC04HW40XFBKX',
                            name: '饰腰带外套',
                            brand: 'HELMUT LANG',
                        }
                    ]
                }}
            />
            <ShopAll 
                cta={{
                    link: "https://cn.iteshop.com/b_it/women/new-arrivals",
                    content: '选购全部'
                }}
            />  
            <RedirectBannerCta media={(
            <Image image={{mobile: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483886741974.jpg', desktop: '//itmall-resources.oss-cn-hangzhou.aliyuncs.com/4/2020/10/14/16026483834569700.jpg'}}/> 
            )} 
            desc={{
                titles: ['风格盛宴', '直击 2020 秋冬潮流趋势'],
                content: '探寻潮流与生活的更多可能。'
            }}
            cta={{
                link: 'https://cn.iteshop.com/b_it/landingPage/october-fw20-m',
                content: '探索男士'
            }}
            />
        </main>
    </article>
);

export default App;
