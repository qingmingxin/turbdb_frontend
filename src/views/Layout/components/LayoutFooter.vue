<template>
  <footer class="app_footer">
    <div class="extra">
      <div class="container">
        <div class="copyright">
          <p>
            <RouterLink to="/about">关于我们</RouterLink>
            <!-- <a href="javascript:;">关于我们</a> -->
            <!-- <a href="javascript:;">帮助中心</a> -->
          </p>
          <p>CopyRight © 湍流数据库</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app_footer {
  overflow: hidden;
  background-color: #f5f5f5;

  .extra {
    background-color: #333;
    width: 100%;
    position: fixed;
    bottom: 0;
  }

  .copyright {
    height: 70px;
    padding-top: 20px;
    text-align: center;
    color: #999;
    font-size: 15px;

    p {
      line-height: 1;
      margin-bottom: 10px;
    }

    a {
      color: #999;
      line-height: 1;
      padding: 0 10px;
      border-right: 1px solid #999;

      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
