<template>
  <h2>Case1-Ma2.25超声速平板湍流边界层</h2>
  <div class="detail-container" style="font-size: large">
    <p>算例详细描述见<sup>[1]</sup>, 计算域与网格如图1所示:</p>
    <figure>
      <img
        src="@/views/Database/images/Hy/Ma2.25超声速平板.png"
        style="display: block; margin: 0 auto"
      />
      <figcaption style="text-align: center">
        图1 计算域与网格<sup>[1]</sup>
      </figcaption>
    </figure>
    <div class="detail-container card">
      <div class="title">来流参数</div>
      <span
        >Ma=2.25, Re=635000/inch, T<sub>∞</sub>=169.44K, Pr=0.7,&gamma;=1.4
      </span>
    </div>
    <div class="detail-container card">
      <div class="title">网格量：</div>
      <span>n𝑥 × n𝑦 × n𝑧 =2193 × 72 × 256</span>
    </div>
    <div class="detail-container card">
      <div class="title">边界条件：</div>
      <ul>
        <li>
          入口边界（inlet）：相同来流参数下，自由发展至x=4inch位置处的层流边界层；
        </li>
        <li>
          壁面边界（wall）：无滑移等温壁面，T<sub>w</sub>/T<sub>∞</sub>=1.9；
        </li>
        <li>上边界与出口边界：无反射边界；</li>
        <li>展向边界：周期边界</li>
        <li>周期吹起扰动的施加位置：4.5in ≤ 𝑥 ≤ 5.0in</li>
      </ul>
    </div>
    <div class="detail-container card">
      <div class="title">数值方法：</div>
      <ul>
        <li>对流项离散&mdash;&mdash;7阶迎风格式；</li>
        <li>粘性项离散&mdash;&mdash;6阶中心格式；</li>
        <li>时间离散&mdash;&mdash;三阶Runge-Kutta。</li>
      </ul>
    </div>
    <h3>DNS数据：</h3>
    <div class="detail-container card">
      <div class="title">无量纲化方法</div>
      <div>
        <math>
          <msub>
            <mrow>
              <mover>
                <mrow>
                  <mi> x </mi>
                </mrow>
                <mrow>
                  <mo>
                    &#x2227;
                    <!-- logical and -->
                  </mo>
                </mrow>
              </mover>
            </mrow>
            <mrow>
              <mi> i </mi>
            </mrow>
          </msub>
          <mo> = </mo>
          <mfrac>
            <mrow>
              <msub>
                <mrow>
                  <mi> x </mi>
                </mrow>
                <mrow>
                  <mi> i </mi>
                </mrow>
              </msub>
            </mrow>
            <mrow>
              <mi> L </mi>
            </mrow>
          </mfrac> </math
        >,
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mover>
            <mrow>
              <mi> t </mi>
            </mrow>
            <mrow>
              <mo>
                &#x2227;
                <!-- logical and -->
              </mo>
            </mrow>
          </mover>
          <mo> = </mo>
          <mfrac>
            <mrow>
              <mi> t </mi>
            </mrow>
            <mrow>
              <mi> L </mi>
              <mo> / </mo>
              <msub>
                <mrow>
                  <mi> U </mi>
                </mrow>
                <mrow>
                  <mi>
                    &#x221E;
                    <!-- infinity -->
                  </mi>
                </mrow>
              </msub>
            </mrow>
          </mfrac> </math
        >,
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <msub>
            <mrow>
              <mover>
                <mrow>
                  <mi> U </mi>
                </mrow>
                <mrow>
                  <mo>
                    &#x2227;
                    <!-- logical and -->
                  </mo>
                </mrow>
              </mover>
            </mrow>
            <mrow>
              <mi> i </mi>
            </mrow>
          </msub>
          <mo> = </mo>
          <mfrac>
            <mrow>
              <mi> u </mi>
            </mrow>
            <mrow>
              <msub>
                <mrow>
                  <mi> U </mi>
                </mrow>
                <mrow>
                  <mi>
                    &#x221E;
                    <!-- infinity -->
                  </mi>
                </mrow>
              </msub>
            </mrow>
          </mfrac> </math
        >,
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mover>
            <mrow>
              <mi>
                &#x03C1;
                <!-- greek small letter rho -->
              </mi>
            </mrow>
            <mrow>
              <mo>
                &#x2227;
                <!-- logical and -->
              </mo>
            </mrow>
          </mover>
          <mo> = </mo>
          <mfrac>
            <mrow>
              <mi>
                &#x03C1;
                <!-- greek small letter rho -->
              </mi>
            </mrow>
            <mrow>
              <msub>
                <mrow>
                  <mi>
                    &#x03C1;
                    <!-- greek small letter rho -->
                  </mi>
                </mrow>
                <mrow>
                  <mi>
                    &#x221E;
                    <!-- infinity -->
                  </mi>
                </mrow>
              </msub>
            </mrow>
          </mfrac> </math
        >,
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mover>
            <mrow>
              <mi> p </mi>
            </mrow>
            <mrow>
              <mo>
                &#x2227;
                <!-- logical and -->
              </mo>
            </mrow>
          </mover>
          <mo> = </mo>
          <mfrac>
            <mrow>
              <mi> p </mi>
            </mrow>
            <mrow>
              <msub>
                <mrow>
                  <mi>
                    &#x03C1;
                    <!-- greek small letter rho -->
                  </mi>
                </mrow>
                <mrow>
                  <mi>
                    &#x221E;
                    <!-- infinity -->
                  </mi>
                </mrow>
              </msub>
              <msubsup>
                <mrow>
                  <mi> U </mi>
                </mrow>
                <mrow>
                  <mi>
                    &#x221E;
                    <!-- infinity -->
                  </mi>
                </mrow>
                <mrow>
                  <mn> 2 </mn>
                </mrow>
              </msubsup>
            </mrow>
          </mfrac> </math
        >,
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mover>
            <mrow>
              <mi> T </mi>
            </mrow>
            <mrow>
              <mo>
                &#x2227;
                <!-- logical and -->
              </mo>
            </mrow>
          </mover>
          <mo> = </mo>
          <mfrac>
            <mrow>
              <mi> T </mi>
            </mrow>
            <mrow>
              <msub>
                <mrow>
                  <mi> T </mi>
                </mrow>
                <mrow>
                  <mi>
                    &#x221E;
                    <!-- infinity -->
                  </mi>
                </mrow>
              </msub>
            </mrow>
          </mfrac> </math
        >,
        <math xmlns="http://www.w3.org/1998/Math/MathML">
          <mover>
            <mrow>
              <mi>
                &#x00B5;
                <!-- micro sign -->
              </mi>
            </mrow>
            <mrow>
              <mo>
                &#x2227;
                <!-- logical and -->
              </mo>
            </mrow>
          </mover>
          <mo> = </mo>
          <mfrac>
            <mrow>
              <mi>
                &#x00B5;
                <!-- micro sign -->
              </mi>
            </mrow>
            <mrow>
              <msub>
                <mrow>
                  <mi>
                    &#x00B5;
                    <!-- micro sign -->
                  </mi>
                </mrow>
                <mrow>
                  <mi>
                    &#x221E;
                    <!-- infinity -->
                  </mi>
                </mrow>
              </msub>
            </mrow>
          </mfrac>
        </math>
      </div>
      <p>此算例中参考长度L=1inch</p>
    </div>
    <div class="detail-container card">
      <div class="title">源数据</div>
      <p>n𝑥 × n𝑦 × n𝑧 = 2193 × 72 × 256</p>
      <p>
        <!-- TODO:暂时修改 -->
        数值模拟程序为中科院力学所李新亮研究员开发的OpenCFD (下载数据请前往<a
          href="#"
          >湍流数据模块</a
        >进行下载)。
      </p>
    </div>
    <div class="detail-container card">
      <div class="title">后处理数据</div>
      <ul>
        <li>摩阻分布</li>
      </ul>
      <!-- TODO:暂时修改 -->
      <p>下载数据请前往<a href="#">湍流数据模块</a>进行下载。</p>

      <p>相同来流条件的其他DNS算例见<sup>[2-4]</sup>。</p>
    </div>
    <div class="detail-container card">
      <div class="title">参考文献：</div>
      <ul>
        <li>
          [1] LI X-L, FU D-X, MA Y-W, et al. Acoustic Calculation for Supersonic
          Turbulent Boundary Layer Flow [J]. Chinese Physics Letters, 2009,
          26(9).
        </li>
        <li>
          [2] RAI M, GATSKI T, ERLEBACHER G. Direct simulation of spatially
          evolving compressible turbulent boundary layers; proceedings of the
          33rd Aerospace Sciences Meeting and Exhibit, F, 1995 [C].
        </li>
        <li>
          [3] PIROZZOLI S, GRASSO F, GATSKI T. Direct numerical simulation and
          analysis of a spatially evolving supersonic turbulent boundary layer
          at M= 2.25 [J]. Physics of fluids, 2004, 16(3): 530-45.
        </li>
        <li>
          [4] HUI G, DE-XUN F, YAN-WEN M, et al. Direct numerical simulation of
          supersonic turbulent boundary layer flow [J]. Chinese Physics Letters,
          2005, 22(7): 1709.
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="css" scoped>
.detail-container {
  text-align: left
}
.title{
    font-size: 16px;
    font-weight: bold
}
</style>
