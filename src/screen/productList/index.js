import React, { useState } from 'react'
import { FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar';
import colors from '../../utils/colors';
import { Images } from '../../utils/images';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomDropdown from '../../component/Dropdown';
import { horizontalScale } from '../../utils/responsiveSize';
import { eyeGlass } from './data';
import FilterModal from '../../component/FilterModal/Index';
import { colorData, filterMenu, FrameBrandData, FrameSizeData, GenderData, priceData, ShapData, weightData } from '../../component/FilterModal/data';

const ProductList = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const [headerName, setHeaderName] = useState("");
    const [filterModal, setFilterModal] = useState(false);
    const [id, setId] = useState(0);
    const [genderId, setgenderId] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [shapeStyleId, setShapeStyleId] = useState(null);
    const [frameId, setFrameId] = useState(null);
    const [brandSelectId, setBrandSelectId] = useState(null);
    const [colorSelectId, setColorSelectId] = useState(null);
    const [weightSelectId, setWeightSelectId] = useState(null);

    useState(() => {
        setHeaderName(route.params.data)
    },[route])

    const goBack = () => {
        navigation.goBack();
    }

    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
    ];

    const handleSelect = (id) => {
      setSelectedId(id);
    };

    const genderSelect = (id) => {
      setgenderId(id);
    }

    const shapeStyleSelect = (id) => {
      setShapeStyleId(id);
    }

    const frameSelect = (id) => {
      setFrameId(id);
    }

    const brandSelect = (id) => {
      setBrandSelectId(id);
    }

    const colorSelect = (id) => {
      setColorSelectId(id);
    }

    const weightSelect = (id) => {
      setWeightSelectId(id)
    }

    const RenderItem = ({item}) => {
        return (
            <TouchableOpacity 
              activeOpacity={1}
              onPress={() => setId(item.id)}
              style={[styles.filterMenuView,{backgroundColor: item.id == id ? colors.white : colors.lightBlue}]}>
              <Text style={styles.filterMenuText}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    const priceRender = ({item}) => {
      return (
        <View style={styles.priceView}>
          <Text style={styles.priceText}>{item.price}</Text>

          <TouchableOpacity 
            activeOpacity={1} 
            onPress={() => handleSelect(item.id)} 
            style={[styles.radioButton,{backgroundColor: item.id == selectedId ? colors.blue : colors.white}]}></TouchableOpacity>
        </View>
      )
    }
    
    const genderRender = ({item}) => {
      return (
        <View style={styles.priceView}>
          <Text style={styles.priceText}>{item.title}</Text>

          <TouchableOpacity 
            activeOpacity={1} 
            onPress={() => genderSelect(item.id)} 
            style={[styles.radioButton,{backgroundColor: item.id == genderId ? colors.blue : colors.white}]}></TouchableOpacity>
        </View>
      )
    }

    const ShapRender = ({item}) => {
      return (
        <View style={styles.glassView}>
          <Image source={item.image} style={styles.shapStyleImageView} />

          <View style={styles.glassName}>
            <TouchableOpacity activeOpacity={1} onPress={() => shapeStyleSelect(item.id)} style={[styles.radioButton,{backgroundColor: item.id == shapeStyleId ? colors.blue : colors.white}]} />
            <Text style={styles.glassNameText}>{item.title}</Text>
          </View>
        </View>
      )
    }

    const frameRender = ({item}) => {
      return (
        <View style={styles.priceView}>
          <Text style={styles.priceText}>{item.title}</Text>

          <TouchableOpacity 
            activeOpacity={1} 
            onPress={() => frameSelect(item.id)} 
            style={[styles.radioButton,{backgroundColor: item.id == frameId ? colors.blue : colors.white}]}></TouchableOpacity>
        </View>
      )
    }

    const frameBrandRender = ({item}) => {
      return (
        <View style={styles.priceView}>
          <Text style={styles.priceText}>{item.title}</Text>

          <TouchableOpacity 
            activeOpacity={1} 
            onPress={() => brandSelect(item.id)} 
            style={[styles.radioButton,{backgroundColor: item.id == brandSelectId ? colors.blue : colors.white}]}></TouchableOpacity>
        </View>
      )
    }

    const colorRender = ({item}) => {
      return (
        <View style={styles.priceView}>
          <View style={styles.colorView}>
            <View style={[styles.radioButton, {borderWidth:0, backgroundColor: item.color, marginRight:10}]} />
            <Text style={styles.priceText}>{item.title}</Text>
          </View>

          <TouchableOpacity 
            activeOpacity={1} 
            onPress={() => colorSelect(item.id)} 
            style={[styles.radioButton,{backgroundColor: item.id == colorSelectId ? colors.blue : colors.white}]}></TouchableOpacity>
        </View>
      )
    }

    const weightRender = ({item}) => {
      return (
        <View style={styles.priceView}>
          <Text style={styles.priceText}>{item.title}</Text>

          <TouchableOpacity 
            activeOpacity={1} 
            onPress={() => weightSelect(item.id)} 
            style={[styles.radioButton,{backgroundColor: item.id == weightSelectId ? colors.blue : colors.white}]}></TouchableOpacity>
        </View>
      )
    }

    const clearFilter = () => {
      setgenderId(null)
      setSelectedId(null);
      setShapeStyleId(null);
      setFrameId(null);
      setBrandSelectId(null);
      setColorSelectId(null);
      setWeightSelectId(null);
      setId(0)
    }

  return (
    <View style={styles.container}>
        
        <CustomStatusbar
          backgroundColor={colors.white}
          barStyle="dark-content"
        />

        <View style={styles.header}>
            <View style={styles.headerSubView}>
                <TouchableOpacity style={styles.headerbackIcon} activeOpacity={1} onPress={goBack}>
                    <Image source={Images.backIcon} style={styles.headerbackIcon} />
                </TouchableOpacity>
                <Text style={styles.greeting}>{headerName}</Text>
            </View>
            <View style={styles.headerIcons}>
                <TouchableOpacity>
                  <Image source={Images.homeCart} style={styles.homeCallIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={Images.homeHeart} style={styles.homeCallIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={Images.homeCall} style={styles.homeCallIcon} />
                </TouchableOpacity>
             </View>
        </View>

        <View style={styles.dropdownView}>
          <ScrollView horizontal>
            <CustomDropdown 
              data={data} 
              placeholder="Popular" 
              customStyle={{height: horizontalScale(30), width: horizontalScale(120), marginHorizontal: horizontalScale(10)}}
              />

            <CustomDropdown 
              data={data} 
              placeholder="Price" 
              customStyle={{height: horizontalScale(30), width: horizontalScale(120), marginRight: horizontalScale(10)}}
              />
            
            <CustomDropdown 
              data={data} 
              placeholder="Brand" 
              customStyle={{height: horizontalScale(30), width: horizontalScale(120), marginRight: horizontalScale(10)}}
              />

            <CustomDropdown 
              data={data} 
              placeholder="Category" 
              customStyle={{height: horizontalScale(30), width: horizontalScale(120), marginRight: horizontalScale(10)}}
            />
          </ScrollView>
        </View>

        <FlatList
          data={eyeGlass}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({item}) => {
            return (
              <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("ProductDetails")} style={styles.homeVisionView}>
                <ImageBackground source={item.image} style={styles.homeVisionImage}>
                  <View style={styles.detailsView}>
                    <View style={styles.bestSellerView}>
                        <View>
                        {
                          item.bestSeller &&
                          <ImageBackground source={Images.bestSeller} style={styles.bestSellerIcon}>
                            <Text style={styles.bestSellerText}>Bestseller</Text>
                          </ImageBackground>
                        }
                          <View style={styles.ratingView}>
                            <Text style={styles.ratingText}>{item.rating}</Text>
                            <Image source={Images.ratingStar} style={styles.ratingStarView} />
                          </View>
                        </View>

                        <TouchableOpacity activeOpacity={1} style={styles.heartView}>
                          <Image source={Images.heart} style={styles.likeUnlike} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomView}>
                      <Text style={styles.titleText}>{item.title}</Text>
                      <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={styles.titleText2}>{item.price}</Text>
                        <Text style={styles.titleText1}>{item.finalPrice}</Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )
          }}
        />

        <TouchableOpacity activeOpacity={1} onPress={() => setFilterModal(true)} style={styles.filterButtonView}>
          <Image source={Images.filter} style={styles.filterImage} />
        </TouchableOpacity>

        <FilterModal
            visible={filterModal}
            resetFilter = {clearFilter}
            applyFilter = {() => console.log("123")}
            closeButton={() => setFilterModal(false)}
            data={filterMenu}
            RenderItem={RenderItem}>
            {
              id == 0 ? 
              <View style={styles.filterDetailsView}>
                  <Text style={styles.headerText}>Price Include Lens</Text>
                  <FlatList 
                    data={priceData}
                    keyExtractor={item => item.id}
                    renderItem={priceRender}
                  />
              </View>
              : id == 1 ? 
              <View style={styles.filterDetailsView}>
                  <Text style={styles.headerText}>Choose Gender</Text>
                  <FlatList 
                    data={GenderData}
                    keyExtractor={item => item.id}
                    renderItem={genderRender}
                  />
              </View>
              : id == 2 ? 
              <View style={styles.filterDetailsView}>
                  <Text style={styles.headerText}>Types of Shapes</Text>
                  <FlatList 
                    data={ShapData}
                    keyExtractor={item => item.id}
                    renderItem={ShapRender}
                    style={styles.shapeDataFlatList}
                    showsVerticalScrollIndicator={false}
                  />
              </View>
              : id == 3 ? 
              <View style={styles.filterDetailsView}>
                  <Text style={styles.headerText}>Types of Frame size</Text>
                  <FlatList 
                    data={FrameSizeData}
                    keyExtractor={item => item.id}
                    renderItem={frameRender}
                  />
              </View>
              : id == 4 ? 
              <View style={styles.filterDetailsView}>
                  <Text style={styles.headerText}>Top Brand</Text>
                  <FlatList 
                    data={FrameBrandData}
                    keyExtractor={item => item.id}
                    renderItem={frameBrandRender}
                  />
              </View>
              : id == 5 ? 
              <View style={styles.filterDetailsView}>
                  <Text style={styles.headerText}>Color</Text>
                  <FlatList 
                    data={colorData}
                    keyExtractor={item => item.id}
                    renderItem={colorRender}
                  />
              </View>
              : id == 6 ? 
              <View style={styles.filterDetailsView}>
                  <Text style={styles.headerText}>Frame Weight</Text>
                  <FlatList 
                    data={weightData}
                    keyExtractor={item => item.id}
                    renderItem={weightRender}
                  />
              </View>
              : null
            }
        </FilterModal>
    </View>
  )
}

export default ProductList;