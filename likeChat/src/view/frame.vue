<template>
  <div id="frame">
    <div class="layout">
        <Layout>
            <Header>
                <Row>
                    <Col span="4">
                        <div class="userIcon">
                            <!-- <div class="pic">
                                <Avatar icon="person" size="large" />
                            </div> -->
                            <!-- trigger="hover" -->
                            <Poptip trigger="hover" title="提示标题" content="提示内容" placement="bottom-start">
                                <Button class="noDisplay">123</Button>
                                <Avatar icon="person" size="large" />
                                <span class="userName">万郁青</span>
                                <div slot="title">
                                    <Avatar icon="person" size="large" />
                                    <span class="userName">万郁青</span>
                                </div>
                                <div slot="content">
                                    <div class="userDeatil">
                                        <div>职位</div>
                                        <span>CEO</span>
                                    </div>
                                    <Button @click="edit" type="primary" size="small">编辑</Button>
                                </div>
                            </Poptip>
                            
                        </div>
                    </Col>
                    <Col span="12">col-12</Col>
                </Row>  
            </Header>
            <router-view/>
        </Layout>
    </div>
    <Modal
        v-model="editModel"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
      edit() {
          this.editModel = true;
      }
  },
  data() {
      return{
          editModel: false
      }
  }
};
</script>

<style lang="scss">
#frame {
  height: 100%;
  .layout {
    height: 100%;
    .ivu-layout-header {
      background: #fff;
      border-bottom: 1px solid #bbb;
      .ivu-col {
        .userIcon {
          height: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          .noDisplay {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            visibility: hidden;
          }
          .bottom {
            text-align: center;
          }
          .pic {
            background-color: #bbb;
            height: 40px;
            width: 40px;
            border-radius: 100%;
          }
          .userName {
            padding-left: 10px;
          }
          .userDeatil {
            padding: 0 5px 5px;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>
